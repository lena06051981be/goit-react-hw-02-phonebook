import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import React, { Component } from 'react'

class App extends Component {
  state = {
  contacts: [],
  name: ''
  }

  formSubmitHandler = data => {
    console.log(data);
  }

  render() {
    return (
      <>
        <PhonebookForm onSubmit={this.formSubmitHandler} />
      </>
  )
}
}

export default App