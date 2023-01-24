import PropTypes from 'prop-types';

import styles from './phonebook-list.module.scss';

const PhonebookList = ({ removeContact, contacts }) => {
  const myContacts = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}.
      <button onClick={() => removeContact(id)} type="button">
        Delete
      </button>
    </li>
  ));

  return <ol>{myContacts}</ol>;
};

export default PhonebookList;

PhonebookList.defaultProps = {
  contacts: [],
};

PhonebookList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
