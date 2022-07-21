import React from 'react';
import PropTypes from 'prop-types';

export const Contact = ({ contact, onDeleteClick }) => {
  return (
    <li>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <button onClick={() => onDeleteClick(contact.id)}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteClick: PropTypes.func.isRequired,
};
