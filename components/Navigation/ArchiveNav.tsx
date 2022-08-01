import React from 'react';
import Link from 'next/link';

const ArchiveNav = () => {
  return (
    <section>
      <div className='container'>
        <nav className='flex justify-between items-center py-10'>
          <Link href='/Profile'>
            {/* <a className='font-medium'>PROFILE</a> */}
            <a id='style-2' className='font-medium' data-replace='PROFILE'>
              <span>PROFILE</span>
            </a>
          </Link>
          <ul className='capitalize'>
            <Link href='/'>
              {/* <a className='font-medium'></a> */}
              <a id='style-2' className='font-medium' data-replace='CLOSE'>
                <span>CLOSE</span>
              </a>
            </Link>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default ArchiveNav;
