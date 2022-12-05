import React, { Component } from "react";

class Phonebook extends Component {
    state = {
        inputValue: ''
    }

    handleInputChange = event => {
        // console.log(event.currentTarget.value);

        this.setState({inputValue: event.currentTarget.value})
    }

    render() {
        return (
        <form style={{ display: 'flex', gap: '10px', flexDirection: 'column', width: '320px' }}>
            <h2>Phonebook Test</h2>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Emmy Richards"
                required
                value={this.state.inputValue}
                onChange={this.handleInputChange}
            />
            <label htmlFor="name">Number</label>
            <input                
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="000-000-00"
                required
                value={this.state.inputValue}
                onChange={this.handleInputChange}
            />
            
            <button type="submit">Add contact</button>
        </form>
    )
    }
} 
   


export default Phonebook;