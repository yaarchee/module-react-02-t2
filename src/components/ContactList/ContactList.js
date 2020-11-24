import React from "react";
import ListItem from "./ListItem/ListItem";
import styles from "./ContactList.module.css";

export default function ContactList({ listData, removeContact }) {
  console.log(listData, "listData");

  return (
    <ul className={styles.contactList}>
      {listData.map(({ id, name, phone }) => (
        <ListItem
          key={id}
          name={name}
          phone={phone}
          onRemove={() => removeContact(id)}
        />
      ))}
    </ul>
  );
}
