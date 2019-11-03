import React, { Component } from 'react'
import API from '../../utils/API'

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
      <div>
        <h1>{this.state.title}</h1>
        {
          this.state.err
            ? <div>{this.state.err}</div>
            : (
              this.state.isLoading
                ? <div>Loading bug...</div>
                :
                <div>
                  <div>{this.state.description}</div>
                  <div>{this.state.attachments}</div>
                  <div>{this.state.timeline}</div>
                  <div>{this.state.createdAt}</div>
                </div>
            )
        }
      </div>
    )
  }
}
export default BugItem
