import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/";
//Creating the middleware
//"help functions"

const middleware = [thunk];

//Creating the store
//const store = createStore(rootReducer);
const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));
export default store;
