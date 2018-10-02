import React from 'react';
import InfiniteScroll from 'components/InfiniteScroll';
import { shallow, mount } from 'enzyme';

const getDefaultProps = () => ({
  list: [{a:1},{b:2},{c:3}],
  loading: false,
  error: false,
  requestLoadBeers: jest.fn()
});

describe('<InfiniteScroll/>', () => {

  describe('event handlers', () => {

    let wrapper;
    const createWrapper = props => shallow(<InfiniteScroll {...props}/>);
    beforeEach(() => {
      const mockProps = getDefaultProps();
      wrapper = createWrapper(mockProps);
    });

    it('adds a scroll event listener on mount', () => {
      const mountedWrapper = mount(<InfiniteScroll {...getDefaultProps()}/>);
      const onScroll = jest.spyOn(mountedWrapper.instance(), 'onScroll');
      mountedWrapper.instance().componentDidMount()
      expect(mountedWrapper.instance().onScroll).toBeTruthy();
    });

    it('executes unmount', () => {
      const componentWillUnmount = jest.spyOn(wrapper.instance(), 'componentWillUnmount');
      wrapper.unmount();
      expect(componentWillUnmount).toHaveBeenCalled();
    });
  });

  describe('conditional render', () => {

    it('shallow renders without crashing', () => {
      const { list, loading, error, requestLoadBeers } = getDefaultProps();
      shallow(<InfiniteScroll error={error} requestLoadBeers={requestLoadBeers} loading={loading} list={list} />
      );
    });

    it('renders differently when loading', () => {
      const { error, requestLoadBeers, list } = getDefaultProps();
      const wrapper = shallow(<InfiniteScroll
          error={error}
          requestLoadBeers={requestLoadBeers}
          loading={true}
          list={list} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders differently with an error', () => {
      const { loading, requestLoadBeers, list } = getDefaultProps();
      const wrapper = shallow(<InfiniteScroll
          error={'error'}
          requestLoadBeers={requestLoadBeers}
          loading={true}
          list={list} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders differently with an error and 0 list items', () => {
      const { loading, requestLoadBeers } = getDefaultProps();
      const wrapper = shallow(<InfiniteScroll
          error={'error'}
          requestLoadBeers={requestLoadBeers}
          loading={true}
          list={[]} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

});
