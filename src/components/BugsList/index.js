import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BugItem from '../BugItem'

class BugsList extends Component {
  constructor () {
    super()
    this.state = {
      bugList: [
        {
          id: 1,
          title: '',
          description: ''
        },
        {
          id: 2,
          title: '',
          description: ''
        },
        {
          id: 3,
          title: '',
          description: ''
        }
      ]
    }
  }

  render () {
    return (
      <div>
        <Link to='/'>
          <h1>Bugs List</h1>
        </Link>
        <Link to='/bugitem'>
          {
            this.state.bugList.map(item =>
              <BugItem key={item.id} {...item} />
            )
          }
        </Link>
      </div>
    )
  }
}
export default BugsList
