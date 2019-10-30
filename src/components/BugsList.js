import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

class BugsList extends Component {
  render () {
    return (
      <div>
        <Link to='/'>
          <h1>Bugs List</h1>
        </Link>
        <Link to='/bugitem'>
          <h2>Bug item</h2>
        </Link>
      </div>
    )
  }
}
export default BugsList
