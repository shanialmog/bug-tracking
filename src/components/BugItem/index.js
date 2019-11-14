import React, { Component } from 'react'
import API from '../../utils/API'
import Typography from '@material-ui/core/Typography'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Container } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Divider from '@material-ui/core/Divider'
import moment from 'moment'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class BugItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.match ? this.props.match.params.bugid : null,
      title: this.props.title,
      description: '',
      attachments: [],
      timeline: [],
      createdAt: '',
      isLoading: true,
      err: false,
      comment: 'Comment here'
    }
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormChange (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  componentDidMount () {
    this.setState({ err: false }, async () => {
      try {
        const bug = await API.get(`/bugs/${this.state.id}`)
        this.setState({
          title: bug.title,
          description: bug.description,
          attachments: bug.attachments,
          timeline: bug.timeline,
          createdAt: bug.createdAt,
          isLoading: false
        })
      } catch (_e) {
        this.setState({ err: 'Could not load bug, please try again', isLoading: false })
      }
    })
  }

  handleFormSubmit (event) {
    event.preventDefault()
    this.setState({ err: false, isLoading: true }, async () => {
      try {
        await API.post(`/bugs/${this.state.id}/comments`, {
          comment: this.state.comment
        })
        this.setState({
          timeline: [
            ...this.state.timeline,
            {
              type: 'comment',
              time: 1573415515,
              user: {
                thumbnail: 'https://avatars1.githubusercontent.com/u/40774580?s=88&v=4',
                username: 'shanialmog'
              },
              content: this.state.comment
            }
          ],
          isLoading: false,
          comment: 'Comment here'
        })
        console.log(this.state.timeline)
      } catch (_e) {
        this.setState({ err: 'could add comment, try again', isLoading: false })
      }
    })
  }

  render () {
    const bugTimeline = this.state.timeline.map(item =>
      <List key={item.id + item.time} style={{ border: '1px solid rgba(0, 0, 0, 0.12)', marginBottom: 10 }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt={item.user.username} src={item.user.thumbnail} />
          </ListItemAvatar>
          <ListItemText primary={item.user.username} secondary={moment.unix(item.time).format('DD/MM/YYYY')} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText secondary={item.content} />
        </ListItem>
      </List>
    )
    return (
      <Container maxWidth='xl'>
        <Typography variant='h4' gutterBottom>{this.state.title}</Typography>
        <Typography variant='h6' gutterBottom>{this.state.description}</Typography>
        {
          this.state.err
            ? (
              <SnackbarContent
                message={
                  this.state.err
                }
              />
            )
            : (
              this.state.isLoading
                ? <CircularProgress />
                : (
                  <div>
                    {
                      bugTimeline
                    }
                    <form
                      onSubmit={this.handleFormSubmit}

                    >
                      <div>
                        <TextField
                          onChange={this.handleFormChange}
                          type='text'
                          name='comment'
                          value={this.state.comment}
                          id='standard-full-width'
                          multiline
                          rows='4'
                          margin='normal'
                          variant='outlined'
                        />
                      </div>
                      <Button
                        disabled={this.state.isLoading}
                        variant='contained'
                        size='small'
                        color='primary'
                        type='submit'
                      >
                        Add comment
                        {this.state.isLoading && <CircularProgress size={18} style={{ marginLeft: 10 }} />}
                      </Button>
                    </form>
                  </div>
                )
            )
        }
      </Container>
    )
  }
}
export default BugItem
