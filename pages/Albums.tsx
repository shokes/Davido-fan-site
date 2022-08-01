import React from 'react';
import InitialTransition from '../components/InitialTransition/InitialTransition';
import albums from '../data';
import Image from 'next/image';
import AlbumNav from '../components/Navigation/PageNav';
import HorizontalScroll from 'react-scroll-horizontal';

import ScrollHorizontal from 'react-scroll-horizontal';

const Albums = () => {
  const child = { width: `300em`, height: `100%` };
  return (
    <section>
      <InitialTransition />
      <AlbumNav />
      {/* <div className='relative flex items-center'> */}
      <div id='slider' className='app '>
        <ScrollHorizontal
          reverseScroll={true}
          pageLock={false}
          // config={{ stiffness: 2, damping: 2 }}
        >
          {/* <div style={child} className='flex gap-x-5  '>
            {albums.map((item) => {
              return (
                <Image
                  src={item.cover}
                  width={1300}
                  height={200}
                  //  layout='fill'
                  //  style={child}
                  // className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                />
              );
            })}
          </div> */}
          fddd
        </ScrollHorizontal>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Albums;
