import React, { Component } from 'react'

class BugItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id,
      title: this.props.title,
      description: this.props.description
    }
  }

  render () {
    return (
      <h1>Bug{this.state.id}</h1>
    )
  }
}
export default BugItem
