import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
      <Link to='/bugitem'>
        <h1>Bug{this.state.id}</h1>
      </Link>
    )
  }
}
export default BugItem
