import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import sampleReducer from './sampleReducer';
import { LOCATION_CHANGE } from 'react-router-redux';

const routeInitialState = {
  location: null,
};

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        locationBeforeTransitions: action.payload
      }
    default:
      return state;
  }
}

export default function createReducer(injectedReducers) {
  return combineReducers({
    routing: routeReducer,
    sample: sampleReducer,
    // any other main reducers
    ...injectedReducers
  });
}
