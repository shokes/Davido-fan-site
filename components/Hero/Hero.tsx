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
        <div className='grid grid-cols-1 lg:grid-cols-2 mb-7 '>
          <div className='flex gap-10 md:gap-20 my-10 lg:mt-0 '>
            <div className='md:hidden lg:block '>
              <Image
                src={davido}
                height={200}
                width={200}
                className='rounded-full'
              />
            </div>
            <div className='hidden md:block lg:hidden '>
              <Image
                src={davido}
                height={350}
                width={350}
                className='rounded-full'
              />
            </div>

            <div className='w-[15rem] md:w-[22rem] lg:w-[15rem]'>
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
          <div className='hidden lg:block'>
            <Image src={hero} width={600} height={600} />
          </div>
        </div>
        {/* mobile nav begins */}

        <div className='lg:hidden flex flex-col gap-10 '>
          <Link href='/Music'>
            <a
              id='style-2'
              className='text-7xl cursor-pointer '
              data-replace='MUSIC'
            >
              <span>MUSIC</span>
            </a>
          </Link>
          <a
            id='style-2'
            href='https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Davido'
            data-replace='AWARDS'
            className='text-7xl cursor-pointer self-end '
            target='_blank'
          >
            <span>AWARDS</span>
          </a>
          <a
            id='style-2'
            href='https://www.youtube.com/c/DavidoOfficial/videos'
            data-replace='VIDEOS'
            className='text-7xl cursor-pointer '
            target='_blank'
          >
            <span>VIDEOS</span>
          </a>
        </div>
        {/* end of mobile nav */}
        <div className='hidden lg:block absolute top-[5rem] right-[25rem] uppercase   text-black'>
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
        <div className=' hidden lg:block absolute top-[15rem] left-[13rem] uppercase text-black'>
          <div className='relative'>
            <span className='text-2xl absolute top-[0rem] -left-[2rem]'>
              02
            </span>

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
        <div className=' hidden lg:block absolute top-[24rem] right-[22rem] uppercase  text-black '>
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

        <div className='hidden lg:block absolute top-[22rem] right-[49.5rem]  '>
          <Image src={davido2} width={200} height={180} />
        </div>

        <a
          href='https://github.com/shokes/Davido-fan-site'
          target='_blank'
          className='uppercase flex  absolute lg:top-[25rem] top-[45rem] md:top-[55rem] font-semibold  left-0 border border-gray-400  p-14 w-5 h-5 items-center justify-center rounded-full text-gray-700'
        >
          {' '}
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import AnimatedText from "./AnimatedText";
// import "./styles.css";

// export default function App() {
//   const [replay, setReplay] = useState(true);
//   // Placeholder text data, as if from API
//   const placeholderText = [
//     { type: "heading1", text: "Framer Motion" },
//     {
//       type: "heading2",
//       text: "Animating responsive text!"
//     }
//   ];

//   const container = {
//     visible: {
//       transition: {
//         staggerChildren: 0.025
//       }
//     }
//   };

//   // Quick and dirt for the example
//   const handleReplay = () => {
//     setReplay(!replay);
//     setTimeout(() => {
//       setReplay(true);
//     }, 600);
//   };

//   return (
//     <motion.div
//       className="App"
//       initial="hidden"
//       // animate="visible"
//       animate={replay ? "visible" : "hidden"}
//       variants={container}
//     >
//       <div className="container">
//         {placeholderText.map((item, index) => {
//           return <AnimatedText {...item} key={index} />;
//         })}
//       </div>
//       <button onClick={handleReplay}>
//         Replay <span>⟲</span>
//       </button>
//     </motion.div>
//   );
// }
