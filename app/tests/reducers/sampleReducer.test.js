import beersReducer from 'reducers/beersReducer';
import {
  loadBeers,
  beersLoaded,
  beersLoadingError,
  clearBeers
} from 'actions/index';

describe('beersReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      beers: [{
        tagline: 'hello.'
      }]
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(beersReducer(state, {})).toEqual(expectedResult);
  });

  it('should handle the loadBeers action correctly', () => {
    const expectedResult = {
      ...state,
      loading: true,
      error: false
    };

    expect(beersReducer(state, loadBeers())).toEqual(expectedResult);
  });

  it('should handle the beersLoaded action correctly', () => {
    const beers = [{
      name: 'My Beer',
      tagline: 'tag.'
    }];
    const newBeers = beers.map(item => {
      return {
        ...item,
        tagline : item.tagline.replace(/\./g,'')
      }
    });
    const expectedResult = {
      ...state,
      loading: false,
      error: false,
      beers: [
        ...state.beers,
        ...newBeers
      ]
    };

    expect(beersReducer(state, beersLoaded(beers))).toEqual(expectedResult);
  });

  it('should handle the beersLoadingError action correctly', () => {
    const error = {
      msg: 'Not found',
    };
    const expectedResult = {
      ...state,
      loading: false,
      error: error
    };

    expect(beersReducer(state, beersLoadingError(error))).toEqual(expectedResult);
  });
});
