import propTypes from 'prop-types';

function ContactList({ contacts, filter }) {
  if (filter !== '') {
    let newContacts = contacts.filter(el =>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

    return (
      <ul>
        {newContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: propTypes.array,
};

export default ContactList;
