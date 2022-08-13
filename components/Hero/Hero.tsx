import React from 'react';
import Image from 'next/image';
import hero from '../../public/hero.webp';
import davido from '../../public/davido-1.jpeg';
import davido2 from '../../public/davido-2.jpeg';
import Link from 'next/link';
import { motion } from 'framer-motion';
import InitialTransition from '../InitialTransition/InitialTransition';

const Hero = () => {
  return (
    <section>
      <InitialTransition />
      <div className='container relative   '>
        <div className='grid grid-cols-2 '>
          <div className='flex gap-10'>
            {/* <div className='w'>
              <Image
                src={davido}
                height={200}
                width={200}
                className='rounded-full'
              />
            </div> */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 5.5 }}
            >
              <Image
                src={davido}
                height={200}
                width={200}
                className='rounded-full'
              />
            </motion.div>
            <div className='w-[15rem]'>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className='text-2xl font-bold mb-2'
              >
                Davido
              </motion.h2>
              <p className='uppercase mb-5'>
                singer, songwriter & record producer.
              </p>
              <p>
                Based in Lagos. Founder of DMW, home to some of the biggest
                artistes in Nigeria.{' '}
              </p>
            </div>
          </div>

          <Image src={hero} width={600} height={600} />
        </div>
        <div className='absolute top-[5rem] right-[25rem] uppercase   text-black'>
          <span className='text-2xl'>01</span>
          <Link href='/Music'>
            <a
              id='style-2'
              className='text-7xl mt-10 cursor-pointer '
              data-replace='MUSIC'
            >
              <span>MUSIC</span>
            </a>
          </Link>
        </div>
        <div className='absolute top-[15rem] left-[13rem] uppercase text-black'>
          <div className='relative'>
            <span className='text-2xl absolute top-[0rem] -left-[2rem]'>
              02
            </span>
            {/* <a
              href='https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Davido'
              target='_blank'
              className='text-7xl mt-10 cursor-pointer '
            >
              awards
            </a> */}
            <a
              id='style-2'
              href='https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Davido'
              data-replace='AWARDS'
              className='text-7xl mt-10 cursor-pointer '
              target='_blank'
            >
              <span>AWARDS</span>
            </a>
          </div>
        </div>
        <div className='absolute top-[24rem] right-[22rem] uppercase  text-black '>
          <div className='relative'>
            <span className='text-2xl absolute top-[0rem] -left-[2rem]'>
              03
            </span>

            <a
              id='style-2'
              href='https://www.youtube.com/c/DavidoOfficial/videos'
              data-replace='VIDEOS'
              className='text-7xl mt-10 cursor-pointer '
              target='_blank'
            >
              <span>VIDEOS</span>
            </a>
          </div>
        </div>

        <div className='absolute top-[22rem] right-[49.5rem]  '>
          <Image src={davido2} width={200} height={180} />
          {/* <h3 className='font-semibold uppercase'>obo</h3> */}
        </div>

        <a
          href='https://github.com/shokes/Davido-fan-site'
          target='_blank'
          className='uppercase absolute top-[25rem] font-semibold  left-0 border border-gray-400   p-10 w-5 h-5 flex items-center justify-center rounded-full text-gray-700'
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;
