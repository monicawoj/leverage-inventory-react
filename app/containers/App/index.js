import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  getUser,
  changeView
} from 'actions/index';
import App from './App';

const mapDispatchToProps = (dispatch) => ({
  getUser: (id) => {
    dispatch(getUser(id));
  },
  changeView: () => {
    dispatch(changeView());
  }
});

const mapStateToProps = (state) => {
  const {
    data, absoluteView, loading, error
  } = state.user;
  return ({
    user: data,
    absoluteView,
    loading,
    error
  });
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(App);
export { mapDispatchToProps };
