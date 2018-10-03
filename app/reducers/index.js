import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './userReducer';
// import groupReducer from './groupReducer';
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
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routing: routeReducer,
  user: userReducer,
  // group: groupReducer,
});

export default rootReducer;
