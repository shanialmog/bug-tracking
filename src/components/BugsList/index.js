import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import API from '../../utils/API'

class BugsList extends Component {
  constructor () {
    super()
    this.state = {
      bugs: [],
      isLoading: true
    }
  }

  async componentDidMount () {
    const bugs = await API.get('/bugs')
    this.setState({ bugs, isLoading: false })
  }

  render () {
    return (
      <div>
        <Link to='/'>
          <h1>Bugs List</h1>
        </Link>
        {
          this.state.isLoading
            ? <div>Loading bugs...</div>
            : this.state.bugs.map(item =>
              <Link key={item.id} to={`/bugs/${item.id}`}>
                <div>
                  {item.title}
                </div>
              </Link>
            )
        }
      </div>
    )
  }
}
export default BugsList