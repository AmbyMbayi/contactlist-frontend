import React, { useState, useContext, useEffect } from "react";
import createContact from "../../context/actions/contacts/createContact";
import clearCreateContact from "../../context/actions/contacts/clearCreateContact";
import CreateContact from "../../layout/Contacts/Create";
import { GlobalContext } from "../../context/Provider";
import { useHistory } from "react-router-dom";

const CreateContactContainer = () => {
  const [form, setForm] = useState({});
  const [tempFile, setTempFile] = useState(null);
  const history = useHistory();

  const {
    contactsDispatch,
    contactsState: {
      addContact: { loading, data, error },
    },
  } = useContext(GlobalContext);

  const onImageChange = (e) => {
    e.persist();
    const fileURL = e.target.files[0];
    setForm({ ...form, contactPicture: fileURL });

    if (fileURL) {
      setTempFile(URL.createObjectURL(fileURL));
    }
  };

  useEffect(() => {
    if (data) {
      history.push("/");
    }
    return () => {
      clearCreateContact()(contactsDispatch);
    };
  }, [data]);

  const formIsHalfFilled =
    Object.values(form).filter((item) => item && item !== "")?.length > 0 &&
    !data;

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  console.log("form", form);
  const onSubmit = () => {
    createContact(form)(contactsDispatch);
  };

  const formInvalid =
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.country?.length ||
    !form.phoneNumber?.length;
  return (
    <CreateContact
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      formInvalid={formInvalid}
      loading={loading}
      formIsHalfFilled={formIsHalfFilled}
      onImageChange={onImageChange}
      tempFile={tempFile}
    />
  );
};

export default CreateContactContainer;
