import React from 'react';
import { motion } from 'framer-motion';

const blackBox = {
  initial: {
    height: '100%',
    // bottom: 0,
    top: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 1.5,
      // ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: 'afterChildren',
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const SingleAlbumTrans = () => {
  // Scroll user to top to avoid showing the footer
  // React.useState(() => {
  //   typeof windows !== 'undefined' && window.scrollTo(0, 0);
  // }, []);

  return (
    <motion.div
      className='absolute z-50 flex items-center justify-center w-full bg-[#e1dfdd]'
      initial='initial'
      animate='animate'
      variants={blackBox}
    >
      {/* <motion.svg variants={textContainer} className='absolute z-50 flex'>
        <pattern
          id='pattern'
          patternUnits='userSpaceOnUse'
          width={750}
          height={800}
          className='text-white'
        >
          <rect className='w-full h-full fill-current' />
          <motion.rect
            variants={text}
            className='w-full h-full text-gray-600 fill-current'
          />
        </pattern>
        <text
          className='text-4xl font-bold'
          textAnchor='middle'
          x='50%'
          y='50%'
          style={{ fill: 'url(#pattern)' }}
        >
          Davido
        </text>
      </motion.svg> */}
    </motion.div>
  );
};

export default SingleAlbumTrans;
