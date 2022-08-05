import React from 'react';
import davido2 from '../../public/Profile2.jpg';
import Image from 'next/image';

const ProfileImage = () => {
  return (
    <section className='container'>
      <div>
        <Image src={davido2} width={1200} height={550} />
        {/* <span className='absolute -top-[3.1rem] right-2/4 translate-x-2/4 translate-y-1/2 font-bold text-5xl'>
          David Adeleke.
        </span> */}
      </div>
    </section>
  );
};

export default ProfileImage;
