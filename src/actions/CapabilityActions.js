import axios from "axios";
import { 
    ADD_CAPABILITY, 
    DELETE_CAPABILITY, 
    GET_CAPABILITIES, 
    GET_CAPABILITY, 
    GET_ERRORS, 
    CLEAR_CAPABILITY_CLOSE_MODAL 
} from "./ActionTypes";

export const getAllCapabilities = () => async dispatch => {
    try {
        const res = await axios.get("http://localhost:8080/dashboard");
        dispatch({
            type: GET_CAPABILITIES,
            payload: res.data._embedded.capabilityList,
            links: res.data._links
        });
    } catch (error) {
        dispatch({
            type: GET_CAPABILITIES,
            payload: [],
            links: {}
        });
    }
};

export const deleteCapability = (id, deleteLink) => async dispatch => {
    await axios.delete(deleteLink);
    dispatch({
        type: DELETE_CAPABILITY,
        payload: id
    });
};

export const addCapability = (capability, closeModal, postLink) => async dispatch => {
    try {
        const res = await axios.post(postLink, capability);
        closeModal();
        dispatch ({
            type: ADD_CAPABILITY,
            payload: res.data
        });
        dispatch ({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch ({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

export const getCapabilityById = id => async dispatch => {
    dispatch({
        type: GET_CAPABILITY,
        payload: id
    });
};

export const closeModalClearState = () => async dispatch => {
    dispatch({
        type: CLEAR_CAPABILITY_CLOSE_MODAL,
        payload: {}
    });
};