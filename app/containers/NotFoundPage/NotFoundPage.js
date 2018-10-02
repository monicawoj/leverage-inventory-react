import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="hero is-warning is-large is-centered has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Sorry, page not found!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
