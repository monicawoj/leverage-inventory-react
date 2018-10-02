import React from 'react';
import Signature from 'components/Signature';
import { shallow } from 'enzyme';

describe('<Signature/>', () => {
  it('renders the current year', () => {
    const date = new Date();
    const currentYear = date.getFullYear().toString();
    const wrapper = shallow(<Signature/>);
    expect(wrapper.text()).toContain(currentYear);
  });
  it('renders a name that is passed to it', () => {
    const name = 'Monica'
    const wrapper = shallow(<Signature name={name}/>);
    expect(wrapper.text()).toContain(name);
  });
});
