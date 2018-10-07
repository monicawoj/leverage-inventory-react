import {
  GET_USER,
  CHANGE_VIEW,
  USER_LOADED,
  USER_LOADING_ERROR,
  CHANGE_COMPARISON_GROUP
} from './constants';

export const getUser = (id) => ({
  type: GET_USER,
  id
});

export const changeView = (view) => {
  console.log(`dispatched change view with ${view}`);
return {type: CHANGE_VIEW,
view}
};

export const userLoaded = (data) => ({
  type: USER_LOADED,
  data
});

export const userLoadingError = (error) => ({
  type: USER_LOADING_ERROR,
  error
});

export const changeComparisonGroup = (name, submissions) => ({
  type: CHANGE_COMPARISON_GROUP,
  name,
  submissions
});
