import React from 'react';
import BeerModal from 'containers/BeerModal';
import HomePage, { mapDispatchToProps } from 'containers/HomePage';
import InfiniteScroll from 'components/InfiniteScroll';
import { shallow, mount } from 'enzyme';

const modalProps = {
  removeFocusBeer : jest.fn(),
  getSimilarBeers : jest.fn(),
  focusBeer : {},
  similarBeersLoading : false,
  similarBeersError : false,
  similarBeers : [{},{},{}],
  chooseFocusBeer : jest.fn()
};

const infiniteScrollProps = {
  list: [{},{},{}],
  error: false,
  loading: false,
  requestLoadBeers: jest.fn()
};

const homePageProps = {
  ...modalProps,
  ...infiniteScrollProps
};

describe('<HomePage />', () => {
  describe('mapDispatchToProps', () => {
    it('should be injected with funcs to load data', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.requestLoadBeers).toBeDefined();
      expect(result.chooseFocusBeer).toBeDefined();
    });
  });
});
