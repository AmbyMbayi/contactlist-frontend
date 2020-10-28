import React, { useContext } from "react";

import Header from "../../components/Header";
import { GlobalContext } from "../../context/Provider";

const ContactsContainer = () => {
  const context = useContext(GlobalContext);
  console.log("context", context);
  return (
    <div>
      <Header />
      <h1>Contact</h1>
    </div>
  );
};
export default ContactsContainer;
