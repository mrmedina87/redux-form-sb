import React from 'react'
import AsyncValidationForm from './asyncValidationForm'

export default class ContactPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <AsyncValidationForm onSubmit={this.submit} />
  }
}