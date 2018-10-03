import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import saga from 'actions/saga';
import App from './App';
import {
  getUser,
  changeView
} from 'actions/index';

const mapDispatchToProps = (dispatch) => ({
  getUser: (id) => {
    dispatch(getUser(id));
  },
  changeView: () => {
    dispatch(changeView());
  }
});

const mapStateToProps = (state) => {
  const user = state.user;
  return ({
    user: user.data,
    view: user.view,
    loading: user.loading,
    error: user.error
  });
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'user', saga });

export default compose(withSaga, withConnect)(App);
export { mapDispatchToProps };
