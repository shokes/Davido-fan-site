import React from 'react';
import InitialTransition from '../components/InitialTransition/InitialTransition';
import albums from './data';
import Image from 'next/image';

const Albums = () => {
  return (
    <section>
      <InitialTransition />
      <div className=' grid grid-cols-5 gap-x-4 overflow-auto overflow-x-scroll'>
        {albums.map((item) => {
          return <Image src={item.cover} width={600} height={600} />;
        })}
      </div>
    </section>
  );
};

export default Albums;
