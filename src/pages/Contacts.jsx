import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../components/DocumentTitle";
import { selectIsLoading } from "../redux/selectors";
import { fetchContacts } from "../redux/contacts/operations";
import { ContactList } from "../components/ContactList/ContactList";
import { Contact } from "../components/Contact/Contact";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { Loader } from "../components/Loader/Loader";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && <Loader />}</div>
      <ContactList />
    </>
  );
}
