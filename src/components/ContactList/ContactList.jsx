import React from "react";
// import {
//   ContactItem,
//   ContactListStyled,
//   ContactsWrap,
// } from './ContactList.styled';

export const Contacts = ({ contacts, handleDelete }) => (
  <div>
    <ul>
      {contacts.map((contact, id) => (
        <li key={id}>
          {contact.name}: {contact.number}
          <p type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </p>
        </li>
      ))}
    </ul>
  </div>
);