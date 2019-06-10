import { SET_QUERY, GET_QUERY } from "../Actions/types";

const initialState = {
  query: "",
  missedArticle: 0,
  goalArticle: "",
  startArticle: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload
      };
    default:
      return state;
  }
}
