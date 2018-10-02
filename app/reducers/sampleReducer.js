import {
  LOAD_BEERS,
  LOAD_BEERS_ERROR,
  LOAD_BEERS_SUCCESS,
  CLEAR_BEERS
} from '../actions/constants';

function beersReducer(state = [], action) {
  switch (action.type) {
    case LOAD_BEERS:
      return {
        ...state,
        loading: true,
        error: false
      }
    case LOAD_BEERS_SUCCESS:
      const newBeers = action.beers.map(item => {
        return {
          ...item,
          tagline : item.tagline.replace(/\./g,'')
        }
      });
      return {
        ...state,
        loading: false,
        error: false,
        beers: [
          ...state.beers,
          ...newBeers
        ]
      }
    case LOAD_BEERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case CLEAR_BEERS:
      return {
        ...state,
        beers: []
      }
    default:
      return state;
  }
}

export default beersReducer;
