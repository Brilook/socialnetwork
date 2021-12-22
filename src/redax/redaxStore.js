import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})
// Connecting Redux (browser extension)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


// create store
// const store = createStore(reducers, applyMiddleware(thunkMiddleware));
// to get to the stor from the console at any time (for ease of development)
// window.store = store;

export default store;
