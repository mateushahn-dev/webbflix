import React, {useState} from 'react';
import NavigateBeforeIcons from '@material-ui/icons/NavigateBefore';
import NavigateNextIcons from '@material-ui/icons/NavigateNext';

export default function Movies({ title, items }) {
  const [scrollX, setScrollX] = useState(0);

  const right = () => {
    const windowWidth = window.innerWidth;
    const listWidth = items.results.length * 150;
    const maxScroll = listWidth - windowWidth;
    const newScrollX = scrollX - Math.round(windowWidth / 1.9);
    const finalScrollX = Math.max(-maxScroll, newScrollX);
    setScrollX(finalScrollX);
  };

  const left = () => {
    const newScrollX = scrollX + Math.round(window.innerWidth / 1.9);
    const finalScrollX = Math.min(0, newScrollX);
    setScrollX(finalScrollX);
  };

  return (
    <section className='list'>
      <h2 className='list-title'>{title}</h2>
      <div className='buttons-control'>
        <div className='left' onClick={left}>
          <NavigateBeforeIcons style={{ fontSize: 40 }} />
        </div>
        <div className='right' onClick={right}>
          <NavigateNextIcons style={{ fontSize: 40 }} />
        </div>
      </div>
      <div className='list-items'>
        <div className='list-items-carousel' style={{ width: `${items.results.length * 150}px`, marginLeft: scrollX }}>
          {items.results.length > 0 && items.results.map((item) => (
            <div key={item.id} className='item'>
              <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
