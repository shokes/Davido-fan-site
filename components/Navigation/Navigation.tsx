import Link from 'next/link';

const Navigation = () => {
  return (
    <section>
      <div className='container'>
        <nav className='flex justify-between items-center py-10'>
          <Link href='/'>
            <a className='font-medium'>PROFILE</a>
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

export default Navigation;
