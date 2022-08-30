import { createStore } from 'redux';
import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

const initialState = {}

export default () => {
  return createStore(
    rootReducer,
    initialState,
    // applyMiddleware(...middleware) // to add other middleware
  )
}