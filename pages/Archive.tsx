import Link from 'next/link';
import ArchiveNav from '../components/Navigation/ArchiveNav';
import InitialTransition from '../components/InitialTransition/InitialTransition';
import HorizontalScroll from 'react-scroll-horizontal';
import archivePics from '../data';
import Image from 'next/image';
import Head from 'next/head';

const Archive = () => {
  const child = { width: `450em`, height: `30em` };
  return (
    <section>
      <Head>
        <title>Davido - Archive </title>
      </Head>
      <InitialTransition />
      <ArchiveNav />
      <div className='flex gap-x-[13rem]'>
        <div className='pl-[4.7rem]'>
          <div className=' w-[15rem]'>
            <p className=' text-gray-700 mb-10'>
              This archive contains video clips, art and pictures related to
              davido and his work. Contact us for content removal.
            </p>
            <p className='text-4xl font-bold  mb-14'>
              "We rise by lifting others"
            </p>
            <Link href='/'>
              <button className='border border-gray-400 p-2 rounded-2xl text-gray-700 font-semibold'>
                Go to Home
              </button>
            </Link>
          </div>
        </div>
        <div className='app'>
          <HorizontalScroll reverseScroll={true}>
            <div style={child} className='flex gap-x-10  '>
              {archivePics.map((item) => {
                return (
                  <Image
                    src={item.picture}
                    width={1300}
                    height={50}
                    className='object-fill'
                    //  layout='fill'
                    //  style={child}
                    // className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                  />
                );
              })}
            </div>
          </HorizontalScroll>
        </div>
      </div>
    </section>
  );
};
export default Archive;

//object coverr
