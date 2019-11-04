import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import BugsList from './components/BugsList/'
import BugItem from './components/BugItem/'
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  render () {
    return (
      <div>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path='/bugs' exact component={BugsList} />
            <Route path='/bugs/:bugid' exact component={BugItem} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
