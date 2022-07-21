import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChangeInputFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  getFilterContactsByName = () => {
    const filter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  recordsСontactsInState = (name, number) => {
    const dobbleName = this.state.contacts.find(
      contact => contact.name === name
    );
    dobbleName
      ? window.alert(`${name} is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [
              ...prevState.contacts,
              {
                id: nanoid(),
                name,
                number,
              },
            ],
          };
        });
  };

  handleDeleteClick = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({
      contacts: [...newContacts],
    });
  };

  render() {
    const filtercontactsByName = this.getFilterContactsByName();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm recordsСontactsInState={this.recordsСontactsInState} />

        <h2>Contacts</h2>
        <Filter
          filterContact={this.state.filter}
          onChangeFilter={this.handleChangeInputFilter}
        />
        <ContactList
          contacts={filtercontactsByName}
          onDeleteClick={this.handleDeleteClick}
        />
      </div>
    );
  }
}
