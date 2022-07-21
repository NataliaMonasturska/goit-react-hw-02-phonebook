import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ onChangeFilter, filterContact }) => {
  return (
    <div>
      <label>
        <span>Find contacts by name</span>
        <input
          onChange={onChangeFilter}
          value={filterContact}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  filterContact: PropTypes.string.isRequired,
};
