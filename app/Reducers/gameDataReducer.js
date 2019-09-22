import {
  SET_QUERY,
  GET_QUERY,
  GET_SEARCH_RESULTS,
  LOADING_ARTICLES,
} from '../Actions/types';

const initialState = {
  query: '',
  missedArticle: 0,
  numberOfClicks: 0,
  goalArticle: '',
  startArticle: '',
  articles: [],
  visitedArticles: [],
  loadingArticles: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
        numberOfClicks: state.numberOfClicks + 1,
      };
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        articles: action.payload,
        loadingArticles: false,
      };
    case LOADING_ARTICLES:
      return {
        ...state,
        loadingArticles: true,
      };
    default:
      return state;
  }
}
