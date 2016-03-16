import React from 'react';
import Rating from '../Rating';
import styles from './styles';

export default ({ title, profile, cover, rating, description }) => {
  return (
    <section className="EntityHeader" style={styles.wrapper(cover)}>
      <div className="container-fluid">
        <div className="col-md-3">
          <img src={profile} style={styles.profile} />
        </div>
        <div className="col-md-9">
          <h1>{title} <Rating value={rating} /></h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

