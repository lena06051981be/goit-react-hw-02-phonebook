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
        <div style={{ display: 'flex', flexDirection: 'column', width: '320px' }}>
            <h2>Phonebook Test</h2>
            <label>Name</label>
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
            <label>Number</label>
            <input                
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="000-000-00"
                required
                value={this.state.inputValue}
                onChange={this.handleInputChange}
            />
            
            <button type="submit">Add contact</button>
        </div>
    )
    }
} 
   


export default Phonebook;