import { Contacts } from 'components/ContactList/ContactList';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import React, { Component } from 'react'

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  formSubmitHandler = event => {
    // const newContact = {
    //   id: id,
    //   name: name,
    //   number: number,
    // };

    const id = event.id;
    const name = event.name;
    const number = event.number;
    const contactsLists = [...this.state.contacts];
    console.log(event);

    if (
      contactsLists.find(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
      console.log(contactsLists);
    }

    this.setState({contacts: contactsLists})
  }

  handleDelete = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };

    getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });

    return filterContactsList;
  };

  render() {
    return (
      <>
        <PhonebookForm onSubmit={this.formSubmitHandler} />
        <Contacts
          contacts={this.getFilteredContacts()}
          handleDelete={this.handleDelete}
        ></Contacts>
      </>
  )
}
}

export default App