import React, { Component } from 'react'
import API from '../../utils/API'
import Typography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class NewBug extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Title',
      description: 'Description',
      isLoading: false,
      err: false
    }

    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormChange (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit (event) {
    event.preventDefault()
    this.setState({ err: false, isLoading: true }, async () => {
      try {
        const newBug = await API.post('/bugs', {
          title: this.state.title,
          description: this.state.description
        })
        console.log(newBug.id)
      } catch (_e) {
        this.setState({ err: 'could not save bug, try again' })
      }
    })
  }

  render () {
    return (
      <Container maxWidth='xl'>
        <Typography variant='h2' gutterBottom>New Bug</Typography>
        <form
          onSubmit={this.handleFormSubmit}
        >
          <TextField
            label='Bug name'
            onChange={this.handleFormChange}
            type='text'
            name='title'
            value={this.state.title}
            variant='outlined'
            id='outlined-margin-none'
          >
            Bug name
          </TextField>
          <div>
            <TextField
              onChange={this.handleFormChange}
              type='text'
              name='description'
              value={this.state.description}
              id='outlined-multiline-static'
              label='Bug description'
              multiline
              rows='4'
              margin='normal'
              variant='outlined'
            />
          </div>
          <Button
            variant='contained'
            size='small'
            color='primary'
            type='submit'
          >
              Add bug
          </Button>
        </form>
      </Container>
    )
  }
}
export default NewBug
