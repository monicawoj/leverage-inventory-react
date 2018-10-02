import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import saga from 'actions/saga';
import HomePage from './HomePage';
import {
// actions
} from 'actions/index';

const mapDispatchToProps = (dispatch) => ({
  actionFunction: (x) => {
    dispatch(actionFunction(x));
  },
});

const mapStateToProps = (state) => {
  return ({
    // return key value pairs of state
  });
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'app', saga });

export default compose(withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
