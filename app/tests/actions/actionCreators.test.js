import {
  LOAD_BEERS,
  LOAD_BEERS_SUCCESS,
  LOAD_BEERS_ERROR,
  CLEAR_BEERS
} from 'actions/constants';

import {
  loadBeers,
  beersLoaded,
  beersLoadingError,
  clearBeers
} from 'actions/index';

describe('Beers Actions', () => {
  describe('loadBeers', () => {
    it('should return the correct type and passed page for url query param', () => {
      const page = 1;
      const expectedResult = {
        type: LOAD_BEERS,
        page
      };

      expect(loadBeers(page)).toEqual(expectedResult);
    });
  });

  describe('beersLoaded', () => {
    it('should return the correct type and the passed beers', () => {
      const array = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_BEERS_SUCCESS,
        beers: array
      };

      expect(beersLoaded(array)).toEqual(expectedResult);
    });
  });

  describe('beersLoadingError', () => {
    it('should return the correct type and the error', () => {
      const error = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_BEERS_ERROR,
        error: error
      };

      expect(beersLoadingError(error)).toEqual(expectedResult);
    });
  });

  describe('clearBeers', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CLEAR_BEERS
      };

      expect(clearBeers()).toEqual(expectedResult);
    });
  });
});
