import axios from "axios";
import {
  GET_CAPABILITIES,
  DELETE_CAPABILITY,
  ADD_CAPABILITY,
  GET_ERRORS,
  GET_CAPABILITY,
  CLEAR_CAPABILITY_CLOSE_MODAL,
  UPDATE_CAPABILITY
} from "./ActionTypes";

const clearErrors = () => ({
    type: GET_ERRORS,
    payload: {}
});

const localInstance = axios.create({
    baseURL: "http://localhost:8080/"
});

// const herokuInstance = axios.create({
//     baseURL: ""
// });

// promise example
export const getAllCapabilities = () => async dispatch => {
    await localInstance
    .get("dashboard")
    .then(function(res){
        dispatch({
            type: GET_CAPABILITIES,
            payload: res.data._embedded.capabilityList,
            links: res.data._links
        });
    })
    .catch(function(error){
        dispatch({
            type: GET_CAPABILITIES,
            payload: [],
            links: {}
        });
    })
};

// try catch example
// export const getAllCapabilities = () => async dispatch => {
//   try {
//     const res = await localInstance.get("dashboard");
//     dispatch({
//       type: GET_CAPABILITIES,
//       payload: res.data._embedded.capabilityList,
//       links: res.data._links
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_CAPABILITIES,
//       payload: [],
//       links: {}
//     });
//   }
// };

export const deleteCapability = (id, deleteLink) => async dispatch => {
  await axios.delete(deleteLink);
  dispatch({
    type: DELETE_CAPABILITY,
    payload: id
  });
};

export const addCapability = (
  capability,
  closeModal,
  postLink
) => async dispatch => {
  try {
    const res = await axios.post(postLink, capability);
    closeModal();
    dispatch({
      type: ADD_CAPABILITY,
      payload: res.data
    });
    dispatch(clearErrors());
  } catch (error) {
    dispatch({
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
    payload: {
      techStack: "",
      numOfDevelopers: 0,
      numOfAvailableDevelopers: 0
    }
  });
  dispatch(clearErrors());
};

export const updateCapability = (
  capability,
  closeModal,
  updateLink
) => async dispatch => {
  try {
    const res = await axios.put(updateLink, capability);
    closeModal();
    dispatch({
      type: UPDATE_CAPABILITY,
      payload: res.data
    });
    dispatch(clearErrors());
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};