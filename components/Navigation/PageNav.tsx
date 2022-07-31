import React from 'react';
import Link from 'next/link';

const PageNav = () => {
  return (
    <section>
      <div className='container'>
        <nav className='flex justify-between items-center py-10'>
          <Link href='/'>
            <a className='font-medium'>CLOSE</a>
          </Link>
          <ul className='capitalize'>
            <Link href='/Archive'>
              <a className='font-medium'>ARCHIVE</a>
            </Link>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default PageNav;
