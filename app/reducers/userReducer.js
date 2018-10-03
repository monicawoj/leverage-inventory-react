import {
  GET_USER,
  CHANGE_VIEW,
  USER_LOADED,
  USER_LOADING_ERROR
} from '../actions/constants';

const initialState = {
  data: {},
  absoluteView: true,
  loading: false,
  error: false
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loading: true
      }
    case CHANGE_VIEW:
      return {
        ...state,
        absoluteView: !state.absoluteView
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
    default:
      return state;
  }
}

export default userReducer;
