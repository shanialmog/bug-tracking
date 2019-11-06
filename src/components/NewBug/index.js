import React, { Component } from 'react'
import uuid from 'uuid/v4'
import Typography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class NewBug extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: uuid(),
      title: 'Title',
      description: 'Description'
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
    console.log('id: ' + this.state.id, 'title: ' + this.state.title, 'description: ' + this.state.description)
  }

  render () {
    return (
      <Container maxWidth='xl'>
        <Typography variant='h2' gutterBottom>New Bug</Typography>
        <form
          onSubmit={this.handleFormSubmit}
        >
          <h4>Bug ID:{this.state.id}</h4>
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
