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
      err: false
    }
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

  render () {
    return (
      <Container maxWidth='xl'>
        <Typography variant='h4' gutterBottom>{this.state.title}</Typography>
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
                    <Typography variant='subtitle1' gutterBottom>{this.state.attachments}</Typography>
                    {
                      this.state.timeline.map(item =>
                        <List key={item.id} style={{ border: '1px solid rgba(0, 0, 0, 0.12)', marginBottom: 10 }}>
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
                    }
                  </div>
                )
            )
        }
      </Container>
    )
  }
}
export default BugItem
