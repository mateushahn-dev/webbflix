import React from 'react';
import Movies from './Movies';

export default function Lists({ movies }) {
  return (
    <section className='lists'>
      {movies.map((movie) => (
        <Movies key={movie.slug} title={movie.list} items={movie.items} />
      ))}
    </section>
  );
}
