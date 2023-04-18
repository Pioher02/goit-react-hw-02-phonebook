import { Component } from 'react';


class ContactForm extends Component {
    static defaultProps = {saveContact:0}

  
  render() {
    const {saveContact} = this.props;

    return (
      <>
        <h1>Phonebook</h1>
        <form
          onSubmit={saveContact}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 400,
            padding: 10,
            gap: 10,
            border: '1px solid black',
          }}
        >
          <label htmlFor="name" style={{ fontSize: 20 }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            style={{ width: 150 }}
          />
          <button
            type="submit"
            style={{
              width: 100,
              backgroundColor: 'white',
              borderRadius: 5,
              border: 'none',
              boxShadow: '-1px 1px 3px -1px',
            }}
          >
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
