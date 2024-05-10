import React, {useState, useEffect} from 'react';
import db from './db';
import Header from './components/Header';
import Banner from './components/Banner';
import Lists from './components/Lists';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const [movies, setMovies] = useState([]);
  const [datas, setDatas] = useState([]);
  const [blacHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
        const data = await db.getMovies();
        setMovies(data);

        const original = data.filter((list) => list.slug === 'originals');
        const number = Math.floor(Math.random() * (original[0].items.results.length));
        const movie = original[0].items.results[number];

        const info = await db.getInfos(movie.id, 'tv');
        setDatas(info);
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
  })

  return (
    <>
      <Header black={blacHeader} />
      <Banner datas={datas} />
      <Lists movies={movies} />
      <Footer />
      {movies.length === 0 && <Loading /> || datas.length === 0 && <Loading />}
    </>
  );
}

export default App;