import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorIndicator from 'components/ErrorIndicator';

export default class InfiniteScroll extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    const { list, loading, error, requestLoadBeers } = this.props;

    // http://stackoverflow.com/questions/9439725/
    // javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop)
      || document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight)
      || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight
      || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight)
      >= scrollHeight - 400;

    if (scrolledToBottom) {
      let page = (list.length / 20) + 1;
      if (!loading && !error) {
        requestLoadBeers(page);
      }
    }
  }

  render() {
    const { list, error, loading } = this.props;
    const loadingIcon = loading ? <LoadingIndicator/> : null;
    const errorIcon = (error && list.length) ? (
      <ErrorIndicator
        message={
          'Wow, you\'ve seen em all! Now time to taste test \em all! Enjoy ;)'
        }
      />
    ) : null;

    return <div>
      {this.props.children}
      {loadingIcon}
      {errorIcon}
    </div>
  }
}

InfiniteScroll.propTypes = {
  list: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.any,
  requestLoadBeers: PropTypes.func
}
