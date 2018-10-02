import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Routes from 'containers/Routes';
import App from 'containers/App';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('should render the header', () => {
    const wrap = shallow(<App />);
    expect(wrap.find(Header).length).toBe(1);
  });

  it('should render some routes', () => {
    const wrap = shallow(<App />);
    expect(wrap.find(Routes).length).toBe(1);
  });

  it('should render the footer', () => {
    const wrap = shallow(<App />);
    expect(wrap.find(Footer).length).toBe(1);
  });
});
