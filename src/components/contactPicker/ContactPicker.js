import React from "react";

export const ContactPicker = ({contacts, handle}) => {
  return (
    <select onChange={handle}>
      <option value='null'>No contact</option>
      {contacts.map((contact, index) => (
        <option value={contact.name} key={index}>{contact.name}</option>
      ))}
    </select>
  );
};
