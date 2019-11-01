import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import BugsList from './components/BugsList/'
import BugItem from './components/BugItem/'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/bugs' exact component={BugsList} />
          <Route path='/bugs/:bugid' exact component={BugItem} />
        </Switch>
      </Router>
    )
  }
}

export default App
