import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_BEERS, CHOOSE_FOCUS_BEER } from 'actions/constants';
import {
  beersLoaded,
  beersLoadingError,
  similarBeersLoaded,
  similarBeersLoadingError
} from 'actions/index';

import beerData, { getBeers, getSimilarBeers } from 'actions/saga';

const beer = {
  id: 3,
  abv: 4,
  ibu: 10,
  ebc: 10
};

describe('getBeers Saga function', () => {
  let getBeersGenerator;

  beforeEach(() => {
    const action = {page: 1};
    getBeersGenerator = getBeers(action);

    const selectDescriptor = getBeersGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

  });

  it('should dispatch the beersLoaded action if it requests the data successfully', () => {
    const response = [{
      name: 'First beer',
    }, {
      name: 'Second beer',
    }];
    const putDescriptor = getBeersGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(beersLoaded(response)));
  });

  it('should call the beerLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getBeersGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(beersLoadingError(response)));
  });
});

describe('getSimilarBeers Saga function', () => {
  let getSimilarBeersGenerator;

  beforeEach(() => {
    const beer = {
      id: 3,
      abv: 4,
      ibu: 10,
      ebc: 10
    };
    getSimilarBeersGenerator = getSimilarBeers({beer});

    const selectDescriptor = getSimilarBeersGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

  });

  it('should dispatch the similarBeersLoaded action if it requests the data successfully', () => {
    const response = [{
      name: 'First beer',
    }, {
      name: 'Second beer',
    }];
    const putDescriptor = getSimilarBeersGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(similarBeersLoaded(response)));
  });

  it('should call the error action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getSimilarBeersGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(similarBeersLoadingError(response)));
  });
});

describe('beerDataSaga Saga', () => {
  const beerDataSaga = beerData();

  it('should start task to watch for LOAD_BEERS action', () => {
    const takeLatestDescriptor = beerDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_BEERS, getBeers));
  });

  it('should start task to watch for CHOOSE_FOCUS_BEER action', () => {
    const takeLatestDescriptor = beerDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(CHOOSE_FOCUS_BEER, getSimilarBeers));
  });
});
