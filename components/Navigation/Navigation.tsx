import Link from 'next/link';

const Navigation = () => {
  return (
    <section>
      <div className='container'>
        <nav className='flex justify-between items-center py-10'>
          <Link href='/Profile'>
            <a id='style-2' className='font-medium' data-replace='PROFILE'>
              <span>PROFILE</span>
            </a>
          </Link>

          <Link href='/Archive'>
            <a id='style-2' className='font-medium' data-replace='ARCHIVE'>
              <span>ARCHIVE</span>
            </a>
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
