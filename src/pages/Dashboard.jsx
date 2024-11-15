import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../components/DocumentTitle';
import { selectIsLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/contacts/operations';
// import { ContactList } from '../components/ContactList/ContactList';
// import { Contact } from '../components/Contact/Contact';
// import { ContactForm } from '../components/ContactForm/ContactForm';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { Loader } from '../components/Loader/Loader';
import { DashboardList } from '../components/Dashboard/DashboardList';

export default function Dashboard() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Dashboard</DocumentTitle>
      {/* <DashboardList /> */}
      <div>{isLoading && <Loader />}</div>
      <DashboardList />
    </>
  );
}
