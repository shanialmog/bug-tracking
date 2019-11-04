import React, { Component } from 'react'
import API from '../../utils/API'
import Typography from '@material-ui/core/Typography'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Container } from '@material-ui/core'

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
                    <Typography variant='subtitle1' gutterBottom>{this.state.description}</Typography>
                    <Typography variant='subtitle1' gutterBottom>{this.state.attachments}</Typography>
                    <Typography variant='subtitle1' gutterBottom>{this.state.timeline}</Typography>
                    <Typography variant='subtitle1' gutterBottom>{this.state.createdAt}</Typography>
                  </div>
                )
            )
        }
      </Container>
    )
  }
}
export default BugItem
