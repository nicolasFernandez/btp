import React, { Component } from 'react';
import styles from './styles';
import Map from '../../../Map';
import { Link } from 'react-router';

export default ({ id, photo = {}, title = '', description = '', location, }) => {
  return (
    <div className="SearchItem" style={styles.wrapper}>
      <section>
        <img style={styles.image} src={photo.profile} />
        <h4><Link to={`/entity/${id}`}>{title}</Link></h4>
      </section>
      <p>{description.slice(0, 140)}</p>
      <Map title={title} location={location} />
    </div>
  );
}