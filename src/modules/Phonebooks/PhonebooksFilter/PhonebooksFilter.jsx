import PropTypes from 'prop-types';

import styles from '../phonebooks.module.scss';

const PhonebooksFilter = ({ handleChange }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <div className={styles.formGroup}>
        <label>Find contacts by name</label>
        <input name="filter" onChange={handleChange} />
      </div>
    </div>
  );
};

export default PhonebooksFilter;

PhonebooksFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
