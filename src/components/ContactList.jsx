import propTypes from 'prop-types';

function ContactList ({contacts}){
    return(
        <ul>
            {contacts.map((contact => (
        <li key={contact.id}>
                   {contact.name}:  {contact.number}
        </li>
      )))}
        </ul>
    )

}

ContactList.propTypes = {
    contacts: propTypes.array,
  };
  
  export default ContactList;