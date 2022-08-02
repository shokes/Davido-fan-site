import Image from 'next/image';
import PageNav from '../components/Navigation/PageNav';
import InitialTransition from '../components/InitialTransition/InitialTransition';
import ProfileImage from '../components/ProfileImage/ProfileImage';
import Head from 'next/head';
import Profiledav from '../public/Profile.jpeg';

const Profile = () => {
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
      <h3 className='text-9xl font-bold my-14'>David Adedeji Adeleke </h3>

      <div className='container-bio flex gap-x-20 '>
        <Image src={Profiledav} width={500} height={500} />
        <div className='w-[27rem]'>
          <p className='font-bold text-2xl mb-7'>
            is a singer, songwritter, record producer and philanthropist.
          </p>
          <p className=' mb-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            expedita laboriosam quisquam reprehenderit voluptas dolorem dicta
            aperiam explicabo adipisci est?
          </p>
          <p className='mb-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            expedita laboriosam quisquam reprehenderit voluptas dolorem dicta
            aperiam explicabo adipisci est?
          </p>
          <p className='mb-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            expedita laboriosam quisquam reprehenderit voluptas dolorem dicta
            aperiam explicabo adipisci est? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magni expedita laboriosam quisquam
            reprehenderit voluptas dolorem dicta aperiam explicabo adipisci est?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
