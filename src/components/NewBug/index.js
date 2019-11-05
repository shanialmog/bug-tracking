import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'

class NewBug extends Component {
  constructor () {
    super()
  }
  
  render () {
    return (
      <Container maxWidth='xl'>
        <Typography variant='h2' gutterBottom>New Bug</Typography>
        <form>
          <FormControl variant='outlined'>
            <InputLabel htmlFor='component-outlined'>Bug name</InputLabel>
            <OutlinedInput id='component-outlined' value='Bug name' labelWidth='75' />
          </FormControl>
        </form>
      </Container>
    )
  }
}
export default NewBug
