import Link from 'next/link';
import ArchiveNav from '../components/Navigation/ArchiveNav';
import InitialTransition from '../components/InitialTransition/InitialTransition';

const Archive = () => {
  return (
    <section>
      <InitialTransition />
      <ArchiveNav />
      <div className='container'>
        <div className='w-[15rem]'>
          <p className=' text-gray-700 mb-10'>
            This archive contains video clips, art and pictures related to
            davido and his work. Contact us for content removal.
          </p>
          <p className='text-4xl font-bold  mb-14'>
            "We rise by lifting others"
          </p>
          <Link href='/'>
            <a className='border border-gray-400 p-2 rounded-2xl text-gray-700 font-semibold'>
              Go to Home
            </a>
          </Link>

          {/* <Link href='/'>
            <a>Go to Home</a>
          </Link> */}
        </div>
      </div>
    </section>
  );
};
export default Archive;

//object coverr
