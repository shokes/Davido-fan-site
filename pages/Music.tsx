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
    <section className='overflow-hidden'>
      <Head>
        <title>Davido - Music </title>
      </Head>
      <InitialTransition />
      <AlbumNav />{' '}
      <div className='app '>
        <HorizontalScroll reverseScroll={true}>
          <div style={child} className='flex gap-x-10    '>
            {albums.map((item) => {
              return (
                <Link href={`${item.id}`} key={item.id}>
                  <div className='relative project cursor-pointer'>
                    <Image src={item.cover} width={1300} height={1000} />
                    <div className='absolute see-more top-0 text-black  text-3xl capitalize  right-1/2 translate-x-2/4 translate-y-1/2 text-center '>
                      <span>{item.year}</span>
                      <h3 className='my-7 font-extrabold'>{item.title}</h3>
                      <p>click</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </HorizontalScroll>
      </div>
    </section>
  );
};

export default Music;
