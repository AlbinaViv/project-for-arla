// import { useSelector } from "react-redux";
// import { Contact } from "../Contact/Contact";
// import css from "./ContactList.module.css";
// import { selectContacts, selectFilter } from "../../redux/selectors";
// import { deleteContactAction } from "../../redux/contacts/contacts.slice";

// export const DashboardList = () => {
//   const filter = useSelector(selectFilter);
//   const contacts = useSelector(selectContacts);

//   // const getFilterContacts = (contacts, filter) => {
//   //   if (!filter) {
//   //     return contacts;
//   //   }
//   //   return contacts.filter((contact) =>
//   //     contact.name.toLowerCase().includes(filter)
//   //   );
//   // };

//   const getFilterContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   const deleteUsers = (id) => {
//     dispatch(deleteContactAction(id));
//   };

//   return (
//     <ul className={css.contactList}>
//       {getFilterContacts.map(({ id, name, number }) => (
//         <Contact
//           key={id}
//           name={name}
//           number={number}
//           id={id}
//           onDelete={deleteUsers}
//         />
//       ))}
//     </ul>
//   );
// };
