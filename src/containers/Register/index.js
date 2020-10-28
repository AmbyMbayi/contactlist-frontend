import React, { useEffect } from "react";
import RegisterUI from "../../layout/Register";
import { Link } from "react-router-dom";
import useForm from "./useForm";

const RegisterContainer = () => {
  useEffect(() => {}, []);
  return <RegisterUI form={useForm()} />;
};

export default RegisterContainer;
