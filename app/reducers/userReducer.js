import {
  GET_USER,
  CHANGE_VIEW,
  USER_LOADED,
  USER_LOADING_ERROR,
  CHANGE_COMPARISON_GROUP
} from '../actions/constants';

const initialState = {
  data: {},
  view: 'absolute',
  loading: false,
  error: false,
  comparisonGroup: false
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loading: true
      }
    case CHANGE_VIEW:
      console.log('in the change view reducer');
      return {
        ...state,
        view: action.view
      }
    case USER_LOADED:
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case USER_LOADING_ERROR:
      return {
        ...state,
        error: action.error
      }
    case CHANGE_COMPARISON_GROUP:
      return {
        ...state,
        comparisonGroup: action.group
      }
    default:
      return state;
  }
}

export default userReducer;
