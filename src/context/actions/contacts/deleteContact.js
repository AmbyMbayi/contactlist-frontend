import {
  DELETE_CONTACT_LOADING,
  CONTACTS_LOAD_SUCCESS,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_ERROR,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export default (id) => (dispatch) => {
  dispatch({
    type: DELETE_CONTACT_LOADING,
    payload: id,
  });
  axiosInstance()
    .delete(`/contacts/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_CONTACT_SUCCESS, payload: id });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_CONTACT_ERROR,
        payload: err.response ? err.response.data : "could not connect",
      });
    });
};
