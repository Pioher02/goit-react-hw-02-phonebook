import { Component } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  saveContact = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: nanoid(),
          name: form.elements.name.value,
          number: form.elements.number.value,
        },
      ],
    });

    form.reset();
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <ContactForm saveContact={this.saveContact}></ContactForm>
        <h1>Contacts</h1>
        <Filter filterContact={this.filterContact}></Filter>
        <ContactList contacts={this.state.contacts} filter={this.state.filter} />
      </>
    );
  }
}

export default App;
