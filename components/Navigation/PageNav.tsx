import React from 'react';
import Link from 'next/link';

const PageNav = () => {
  return (
    <section>
      <div className='container'>
        <nav className='flex justify-between items-center py-10'>
          <Link href='/'>
            <a id='style-2' className='font-medium' data-replace='CLOSE'>
              <span>CLOSE</span>
            </a>
          </Link>
          <ul className='capitalize'>
            <Link href='/Archive'>
              <a id='style-2' className='font-medium' data-replace='ARCHIVE'>
                <span>ARCHIVE</span>
              </a>
            </Link>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default PageNav;
