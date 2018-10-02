import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from 'containers/NotFoundPage';

describe('<NotFoundPage />', () => {
  it('should shallow render without breaking', () => {
    const wrap = shallow(<NotFoundPage />);
    expect(wrap).toMatchSnapshot();
  });
});
