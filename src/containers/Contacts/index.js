import React, { useContext, useEffect } from "react";

import Header from "../../components/Header";
import { GlobalContext } from "../../context/Provider";
import getContacts from "../../context/actions/contacts/getContacts";
import { useHistory } from "react-router-dom";

const ContactsContainer = () => {
  const context = useContext(GlobalContext);
  console.log("context", context);
  const history = useHistory();

  useEffect(() => {
    getContacts(history);
  }, []);

  return (
    <div>
      <Header />
      <h1>Contact</h1>
    </div>
  );
};
export default ContactsContainer;
