import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './configureStore';
import App from 'containers/App';
import 'babel-polyfill';

// load favicon
import '!file-loader?name=[name].[ext]!./images/favicon.png';

// Import CSS reset, global styles, and third party styles + font
import 'sanitize.css/sanitize.css';
// import FontFaceObserver from 'fontfaceobserver';
import 'styles/global-styles.scss';

// const openSansObserver = new FontFaceObserver('Open Sans', {});
// openSansObserver.load().then(() => {
//   document.body.classList.add('fontLoaded');
// }, () => {
//   document.body.classList.remove('fontLoaded');
// });

// Create redux store with history
const initialState = {
  sampleReducer: {
    //key val pairs of state
  },
};
const history = createHistory();
const store = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
