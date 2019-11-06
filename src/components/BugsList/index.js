import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import API from '../../utils/API'
import Typography from '@material-ui/core/Typography'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Container } from '@material-ui/core'
import Button from '@material-ui/core/Button'

class BugsList extends Component {
  constructor () {
    super()
    this.state = {
      bugs: [],
      isLoading: true,
      err: false
    }
  }

  componentDidMount () {
    this.setState({ err: false }, async () => {
      try {
        const bugs = await API.get('/bugs')
        this.setState({ bugs, isLoading: false })
      } catch (_e) {
        this.setState({ err: 'Could not load bugs, please try again' })
      }
    })
  }

  render () {
    return (
      <Container maxWidth='xl'>
        <Typography variant='h2' component='h2' gutterBottom>Bugs List</Typography>
        <div>
          <Link to='/bugs/newbug'>
            <Button
              variant='contained'
              color='primary'
              style={{ marginBottom: '15px' }}
            >
              New bug
            </Button>
          </Link>
        </div>
        {
          this.state.err
            ? (
              <SnackbarContent
                message={
                  this.state.err
                }
              />
            )
            : (this.state.isLoading
              ? <CircularProgress />
              : this.state.bugs.map(item =>
                <Link key={item.id} to={`/bugs/${item.id}`}>
                  <Typography variant='subtitle1' gutterBottom>
                    {item.title}
                  </Typography>
                </Link>
              )
            )
        }
      </Container>
    )
  }
}
export default BugsList
