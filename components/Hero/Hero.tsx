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
            <div className='w'>
              <Image
                src={davido}
                height={200}
                width={200}
                className='rounded-full'
              />
            </div>
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
        <div className='absolute top-[5rem] right-[25rem] uppercase font-semibold  text-[#343a40]'>
          <span className='text-2xl'>01</span>
          <Link href='/Music'>
            <h3 className='text-7xl mt-10 cursor-pointer '>music</h3>
          </Link>
        </div>
        <div className='absolute top-[15rem] left-[13rem] uppercase font-semibold text-[#343a40]'>
          <div className='relative'>
            <span className='text-2xl absolute top-[0rem] -left-[2rem]'>
              02
            </span>
            <Link href='/Awards'>
              <h3 className='text-7xl mt-10 cursor-pointer '>awards</h3>
            </Link>
          </div>
        </div>
        <div className='absolute top-[24rem] right-[22rem] uppercase font-semibold text-[#343a40] '>
          <div className='relative'>
            <span className='text-2xl absolute top-[0rem] -left-[2rem]'>
              03
            </span>

            <a
              href='https://www.youtube.com/c/DavidoOfficial/videos'
              target='_blank'
              className='text-7xl mt-10 cursor-pointer '
            >
              videos
            </a>
          </div>
        </div>

        <div className='absolute top-[22rem] right-[50rem]  '>
          <Image src={davido2} width={200} height={180} />
          {/* <h3 className='font-semibold uppercase'>obo</h3> */}
        </div>
        <Link href='/Credits'>
          <button className='uppercase absolute top-[25rem]  left-0 border border-gray-400   p-12 w-5 h-5 flex items-center justify-center rounded-full text-gray-700'>
            Credits
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
