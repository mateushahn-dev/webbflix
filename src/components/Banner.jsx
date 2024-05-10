import React from 'react'

export default function Banner({ datas }) {
  if (!datas || !datas.genres) {
    return <div></div>;
  }

  const genres = [];
  for (let genre of datas.genres) {
    genres.push(genre.name);
  }

  if (datas.overview.length > 180) {
    datas.overview = datas.overview.substring(0, 150) + '...';
  }

  return (
    <section className='banner' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${datas.backdrop_path})` }}>
      <figure className='linear'>
        <figcaption>
          <div className='banner-container'>
            <div className='title'>
              <h1>{datas.original_name}</h1>
            </div>
            <div className='infos'>
              <span className='rating'>{datas.vote_average} pontos</span>
              <span>{datas.number_of_seasons} Temporada{datas.number_of_seasons !== 1 && 's'}, {datas.number_of_episodes} Episódio{datas.number_of_episodes !== 1 && 's'}</span>
            </div>
            <div className='description'>
              <span><p>{datas.overview}</p></span>
            </div>
            <div className='buttons'>
              <a href={`/assistir/${datas.id}`}>
                <button className='watch' type='button'>► Assistir</button>
              </a>
              <a href={`/lista/add/${datas.id}`}>
                <button className='add' type='button'>+ Minha Lista</button>
              </a>
            </div>
            <div className='genres'>
              <p><strong>Gêneros:</strong><span> {genres.join(', ')}</span></p>
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}