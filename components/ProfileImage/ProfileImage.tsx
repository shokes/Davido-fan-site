import React from 'react';
import davido2 from '../../public/Profile2.jpg';
import Image from 'next/image';

const ProfileImage = () => {
  return (
    <section className='container'>
      <div className='hidden lg:block'>
        <Image src={davido2} width={1200} height={550} />
      </div>

      <div className='lg:hidden'>
        <Image src={davido2} width={1200} height={900} />
      </div>
    </section>
  );
};

export default ProfileImage;
