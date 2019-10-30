import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import BugsList from './components/BugsList'
import BugItem from './components/BugItem'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/bugslist' component={BugsList} />
          <Route path='/bugitem' component={BugItem} />
        </Switch>
      </Router>
    )
  }
}

export default App
