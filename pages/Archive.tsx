import Link from 'next/link';
import ArchiveNav from '../components/Navigation/ArchiveNav';
import InitialTransition from '../components/InitialTransition/InitialTransition';
import { ArchiveScroll } from '../components/ArchiveScroll/ArchiveScroll';
import Head from 'next/head';

const Archive = () => {
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

        {/* horizontal scroll here */}
        <ArchiveScroll />
      </div>
    </section>
  );
};
export default Archive;
