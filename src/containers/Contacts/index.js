import React, { useContext, useEffect } from "react";

import Header from "../../components/Header";
import { GlobalContext } from "../../context/Provider";
import getContacts from "../../context/actions/contacts/getContacts";
import { useHistory } from "react-router-dom";
import ContactsListUI from "../../layout/Contacts/List";

const ContactsContainer = () => {
  const { contactsDispatch, contactsState } = useContext(GlobalContext);

  const history = useHistory();
  console.log("contacts", contactsState);

  useEffect(() => {
    getContacts(history)(contactsDispatch);
  }, []);

  return <ContactsListUI state={contactsState} />;
};
export default ContactsContainer;
