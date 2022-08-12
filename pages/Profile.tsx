import Image from 'next/image';
import PageNav from '../components/Navigation/PageNav';
import InitialTransition from '../components/InitialTransition/InitialTransition';
import ProfileImage from '../components/ProfileImage/ProfileImage';
import Head from 'next/head';
import Profiledav from '../public/davido-2.jpeg';
import Marquee from 'react-fast-marquee';
import david from '../public/david.jpg';
import React from 'react';

const Profile = () => {
  // React.useEffect(() => {
  //   // 👇 add class to body element
  //   document.body.style.overflow = 'visible';

  //   // return () => {
  //   //   // 👇️ optionally remove styles when component unmounts
  //   //   // document.body.style.backgroundColor = null;

  //   //   document.body.style.overflow = 'visible';
  //   // };
  // }, []);
  return (
    <section>
      <Head>
        <title>Davido - Profile </title>
      </Head>
      <InitialTransition />
      <PageNav />
      <div>
        <ProfileImage />
      </div>

      <Marquee
        speed={70}
        gradient={false}
        className='text-9xl bg-[#e1dfdd] my-20 leading-[11rem]'
      >
        David Adedeji Adeleke
      </Marquee>
      <div className='container-bio flex gap-x-20 '>
        <Image src={Profiledav} width={500} height={500} />
        <div className='w-[27rem]'>
          <p className='font-bold text-2xl mb-7'>
            is a singer, songwritter, record producer and philanthropist.
          </p>
          <p className=' mb-7 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            expedita laboriosam quisquam reprehenderit voluptas dolorem dicta
            aperiam explicabo adipisci est?
          </p>
          <p className=' mb-7 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            expedita laboriosam quisquam reprehenderit voluptas dolorem dicta
            aperiam explicabo adipisci est?
          </p>
          <p className=' mb-7 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            expedita laboriosam quisquam reprehenderit voluptas dolorem dicta
            aperiam explicabo adipisci est? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magni expedita laboriosam quisquam
            reprehenderit voluptas dolorem dicta aperiam explicabo adipisci est?
          </p>
          <p className=' text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            expedita laboriosam quisquam reprehenderit voluptas dolorem dicta
            aperiam explicabo adipisci est?
          </p>
        </div>
      </div>
      <div className='my-40'>
        <Image src={david} width={1400} height={550} />
      </div>
      <div className='flex container-bio gap-x-28  '>
        <q className='font-bold text-3xl'>
          Make that call. Send that text. Forgive that person. Tell them you
          miss them. Let go of that grudge. Show more kindness. Don’t take it
          for granted because tomorrow isn’t promised.
        </q>
        <p className='text-sm font-semibold'>
          David Adedeji Adeleke was born on 21 November 1992, in Atlanta,
          Georgia. His father Adedeji Adeleke is a business magnate and his
          mother Vero Adeleke was a university lecturer. Davido is the youngest
          of five siblings and his father's second-born son. He attended the
          British International School in Lagos, Nigeria, and at the age of 16,
          he moved back to the United States to study business administration at
          Oakwood University in Alabama.
        </p>
      </div>
    </section>
  );
};

export default Profile;
