import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import BugsList from './components/BugsList'
import BugItem from './components/BugItem'

class App extends Component {
  render () {
    return (
      <Router basename='/bugslist'>
        <Switch>
          <Route path='/' exact component={BugsList} />
          <Route path='/bugitem' exact component={BugItem} />
        </Switch>
      </Router>
    )
  }
}

export default App
