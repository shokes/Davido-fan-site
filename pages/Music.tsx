import InitialTransition from '../components/InitialTransition/InitialTransition';
import Image from 'next/image';
import AlbumNav from '../components/Navigation/PageNav';
import HorizontalScroll from 'react-scroll-horizontal';
import goodTime from '../public/a good time cover.jpg';
import betterTime from '../public/a better time cover.jpeg';
import OBO from '../public/OBO.jpg';
import Head from 'next/head';
import Link from 'next/link';

const albums = [
  {
    id: 1,
    title: 'a better time',

    cover: betterTime,
    year: 2020,
  },
  {
    id: 2,
    title: 'a good time',
    cover: goodTime,
    year: 2019,
  },

  {
    id: 3,
    title: 'omo baba olowo',

    cover: OBO,
    year: 2012,
  },
];

const Music = () => {
  const child = { width: `120em`, height: `70%` };
  return (
    <section className='overflow-hidden pb-7 lg:pb-0'>
      <Head>
        <title>Davido - Music </title>
      </Head>
      <InitialTransition />
      <AlbumNav />{' '}
      <div className='app hidden lg:block '>
        <HorizontalScroll reverseScroll={true}>
          <div style={child} className='flex gap-x-10    '>
            {albums.map((item) => {
              return (
                <Link href={`${item.id}`} key={item.id}>
                  <div className='relative album cursor-pointer'>
                    <Image src={item.cover} width={1300} height={1000} />
                    <div className='absolute click top-0 text-black  text-3xl capitalize  right-1/2 translate-x-2/4 translate-y-1/2 text-center '>
                      <span>{item.year}</span>
                      <h3 className='my-7 font-extrabold'>{item.title}</h3>
                    </div>
                    <span className=' font-semibold top-1/2 text-xl absolute right-1/2 translate-x-1/2  bg-[#e1dfdd]  click p-14 w-5 h-5 flex items-center justify-center rounded-full text-black'>
                      Click
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </HorizontalScroll>
      </div>
      <div className='container lg:hidden flex flex-col  gap-10'>
        {albums.map((item) => {
          return (
            <Link href={`${item.id}`} key={item.id}>
              <div className=' album cursor-pointer'>
                <Image src={item.cover} width={1300} height={1000} />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Music;
