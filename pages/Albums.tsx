import React from 'react';
import InitialTransition from '../components/InitialTransition/InitialTransition';
import albums from './data';
import Image from 'next/image';
import AlbumNav from '../components/Navigation/PageNav';

const Albums = () => {
  return (
    <section>
      <InitialTransition />
      <AlbumNav />
      <div className='relative flex items-center'>
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {albums.map((item) => {
            return (
              <Image
                src={item.cover}
                width={600}
                height={600}
                className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Albums;
