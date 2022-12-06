import React from "react";
// import {
//   ContactItem,
//   ContactListStyled,
//   ContactsWrap,
// } from './ContactList.styled';

export const Contacts = ({ contactsFiltred, handleDelete }) => (
  <div>
    <ul>
      {contactsFiltred.map((contact, id) => (
        <li key={id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);