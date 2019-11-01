import React, { Component } from 'react'

class BugItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.match ? this.props.match.params.bugid : null,
      title: this.props.title,
      description: this.props.description
    }
  }

  render () {
    return (
      <div>
        <h1>Bug {this.state.id}</h1>
      </div>
    )
  }
}
export default BugItem
