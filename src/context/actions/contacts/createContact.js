import {
  ADD_CONTACT_ERROR,
  ADD_CONTACT_LOAD,
  ADD_CONTACT_SUCCESS,
} from "../../../constants/actionTypes";

import axiosInstance from "../../../helpers/axiosInstance";
import { CONNECTION_ERROR } from "../../../constants/api";

export default ({
  firstName: first_name,
  lastName: last_name,
  phoneNumber: phone_number,
  country: country_code,
}) => (dispatch) => {
  dispatch({
    type: ADD_CONTACT_LOAD,
  });

  axiosInstance()
    .post("/contacts/", {
      first_name,
      last_name,
      phone_number,
      country_code,
    })
    .then((res) => {
      console.log("res", res);
      dispatch({
        type: ADD_CONTACT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("err", err);
      dispatch({
        type: ADD_CONTACT_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
