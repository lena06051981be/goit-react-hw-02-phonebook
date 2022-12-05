import React, { Component } from "react";

class Phonebook extends Component {
    state = {
        name: '',
        number: '',
    }

    handleInputChange = event => {
        // console.log(event.currentTarget);
        // console.log(event.currentTarget.value);
        // console.log(event.currentTarget.name);
        // this.setState({ [event.currentTarget.name]: event.currentTarget.value });
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        // console.log(this.state)

        this.props.onSubmit(this.state)
        this.resetForm()
    }

    resetForm = () => {
        this.setState({name: '', number: ''})
    }
    

    render() {
        return (
        <form onSubmit={this.handleFormSubmit} style={{ display: 'flex', gap: '10px', flexDirection: 'column', width: '320px' }}>
            <h2>Phonebook Test</h2>
                {/* <label htmlFor="name"> */}
                <label >
                    Name {''}
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        placeholder="Emmy Richards"
                        required
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </label>
            
                {/* <label htmlFor="name"> */}
                <label >
                    Number {''}
                    <input                
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        placeholder="000-000-00"
                        required
                        value={this.state.number}
                        onChange={this.handleInputChange}
                    />
                </label>        
            <button type="submit">Add contact</button>
        </form>
    )}
}

export default Phonebook;