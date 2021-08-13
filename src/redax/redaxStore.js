import {createStore, combineReducers} from 'redux';
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
})

const store = createStore(reducers);

export default store;
