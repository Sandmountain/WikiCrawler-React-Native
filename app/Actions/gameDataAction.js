import { SET_QUERY, GET_QUERY } from "./types";

export const setQuery = query => async dispatch => {
  try {
    dispatch({
      type: SET_QUERY,
      payload: query
    });
  } catch (error) {
    console.log("error", error);
  }
};
