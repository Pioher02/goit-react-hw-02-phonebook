import { Component } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  saveContact = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    this.setState({ name: form.elements.name.value });
    this.setState({
      contacts: [
        ...this.state.contacts,
        { id: nanoid(), name: form.elements.name.value },
      ],
    });

    form.reset();
  };

  render() {
    return (
      <>
        <ContactForm saveContact={this.saveContact}></ContactForm>
        <h1>Contacts</h1>
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
