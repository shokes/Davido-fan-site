import React from 'react';
import InitialTransition from '../components/InitialTransition/InitialTransition';
import Image from 'next/image';
import AlbumNav from '../components/Navigation/PageNav';
import HorizontalScroll from 'react-scroll-horizontal';
import goodTime from '../public/a good time cover.jpg';
import betterTime from '../public/a better time cover.jpg';
import OBO from '../public/OBO.jpg';

const albums = [
  {
    id: 1,
    title: 'a better time',

    cover: betterTime,
  },
  {
    id: 2,
    title: 'a good time',
    cover: goodTime,
  },

  {
    id: 3,
    title: 'omo baba olowo',

    cover: OBO,
  },
];

const Albums = () => {
  const child = { width: `120em`, height: `70%` };
  return (
    <section>
      <InitialTransition />
      <AlbumNav />

      <div className='app '>
        <HorizontalScroll reverseScroll={true}>
          <div style={child} className='flex gap-x-5  '>
            {albums.map((item: any) => {
              return <Image src={item.cover} width={600} height={200} />;
            })}
          </div>
        </HorizontalScroll>
      </div>
    </section>
  );
};

export default Albums;
