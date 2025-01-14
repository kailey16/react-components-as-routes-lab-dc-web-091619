import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(dir => {
        return <div>
          <h3>Name: {dir.name}</h3>
          <h3>Movies:</h3>
      <ul>{dir.movies.map(movie => <li>{movie}</li>)}</ul>
        </div>})}
    </div>
  );
}

export default Directors
