import React, { Component } from "react";

class Phonebook extends Component {
    state = {
        inputValue: 'qwerty'
    }

    handleInputChange = event => {
        // console.log(event.currentTarget.value);

        this.setState({inputValue: event.currentTarget.value})
    }

    render() {
        return (
        <div>
            <h2>Phonebook Test</h2>
            <input
                type="text"
                name="name"
                    value={this.state.inputValue}
                onChange={this.handleInputChange}

                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <button>Add contact</button>
        </div>
    )
    }
} 
   


export default Phonebook;