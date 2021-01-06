import axios from "axios";
import { DELETE_CAPABILITY, GET_CAPABILITIES } from "./ActionTypes";

export const getAllCapabilities = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/dashboard");

    dispatch({
        type: GET_CAPABILITIES,
        payload: res.data._embedded.capabilityList
    });
};

export const deleteCapability = (id, deleteLink) => async dispatch => {
    await axios.delete(deleteLink);
    dispatch({
        type: DELETE_CAPABILITY,
        payload: id
    });
};