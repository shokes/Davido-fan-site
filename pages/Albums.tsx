import React from 'react';
import InitialTransition from '../components/InitialTransition/InitialTransition';
import albums from './data';
import Image from 'next/image';

const Albums = () => {
  return (
    <section>
      <InitialTransition />
      <div className='container  grid grid-cols-2 gap-4 '>
        {albums.map((item) => {
          return <Image src={item.cover} width={600} height={600} />;
        })}
      </div>
    </section>
  );
};

export default Albums;
