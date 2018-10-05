import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  getUser,
  changeView,
  changeComparisonGroup
} from 'actions/index';
import App from './App';

const mapDispatchToProps = (dispatch) => ({
  getUser: (id) => {
    dispatch(getUser(id));
  },
  changeView: (view) => {
    dispatch(changeView(view));
  },
  changeComparisonGroup: (group) => {
    dispatch(changeComparisonGroup(group));
  }
});

const mapStateToProps = (state) => {
  const {
    data, view, loading, error, comparisonGroup
  } = state.user;
  return ({
    user: data,
    view,
    loading,
    error,
    comparisonGroup
  });
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(App);
export { mapDispatchToProps };
