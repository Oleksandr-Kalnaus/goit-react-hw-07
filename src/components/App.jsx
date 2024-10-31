import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "../redux/contactsOps";
import { useEffect } from "react";
import { selectError, selectIsLoading } from "../redux/selectors";
import Loader from "./Loader/Loader";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
}
