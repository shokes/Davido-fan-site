import React from 'react';
import Link from 'next/link';

const ArchiveNav = () => {
  return (
    <section>
      <div className='container'>
        <nav className='flex justify-between items-center py-10'>
          <Link href='/Profile'>
            <a className='font-medium'>PROFILE</a>
          </Link>
          <ul className='capitalize'>
            <Link href='/'>
              <a className='font-medium'>CLOSE</a>
            </Link>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default ArchiveNav;
