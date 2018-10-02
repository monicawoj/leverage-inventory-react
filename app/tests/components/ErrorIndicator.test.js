import React from 'react';
import PropTypes from 'prop-types';
import ErrorIndicator from 'components/ErrorIndicator';
import { shallow } from 'enzyme';

//should render a message that exactly matches it's prop
describe('<ErrorIndicator/>', () => {
  it('should render a message that is passed to it', () => {
    const message = 'this is an error'
    const wrap = shallow(<ErrorIndicator message={message}/>);
    expect(wrap.text()).toMatch(message);
  });
});

// const ErrorIndicator = ({message}) => (
//   <div className="content">
//     <p>{message}</p>
//   </div>
// );
//
// ErrorIndicator.propTypes = {
//   message: PropTypes.string
// }
//
// export default ErrorIndicator;
