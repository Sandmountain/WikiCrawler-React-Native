import {
  SET_QUERY,
  GET_QUERY,
  GET_SEARCH_RESULTS,
  LOADING_ARTICLES
} from "./types";

const axios = require("axios");

export const setQuery = query => async dispatch => {
  try {
    dispatch({
      type: SET_QUERY,
      payload: query
    });
  } catch (error) {
    console.log("setQuery", error);
  }
};

export const setLoadingArticles = () => {
  return {
    type: LOADING_ARTICLES
  };
};
