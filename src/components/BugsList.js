import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BugsList extends Component {
  render () {
    return (
      <div>
        <h1>Bugs List</h1>
        <Link to='/bugitem'>
          <h2>Bug item</h2>
        </Link>
      </div>
    )
  }
}
export default BugsList
