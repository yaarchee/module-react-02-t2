import React, { Component } from "react";
import CreateContactsForm from "../CreateContactsForm/CreateContactsForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import Section from "../Section/Section";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContacts = (name, phone) => {
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        {
          name,
          phone,
          id: phone,
        },
      ],
    }));
  };

  getContactData() {
    return this.state.contacts;
  }

  removeContact = (taskId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => id !== taskId),
    }));
  };

  setFilterContact = (filter) => {
    this.setState({ filter });
  };

  showFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <>
        <Section>
          <h2>Phonebook</h2>
          <CreateContactsForm onAddContacts={this.addContacts} />
        </Section>

        {this.state.contacts.length >= 1 && (
          <Section>
            <h2>Contacts</h2>
            {this.state.contacts.length > 1 && (
              <Filter
                onSetFilter={this.setFilterContact}
                filterValue={this.state.filter}
              />
            )}
            <ContactList
              listData={this.showFilteredContacts()}
              removeContact={this.removeContact}
            />
          </Section>
        )}
      </>
    );
  }
}
