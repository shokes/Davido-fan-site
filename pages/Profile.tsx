import React from 'react';
import PageNav from '../components/Navigation/PageNav';
import InitialTransition from '../components/InitialTransition/InitialTransition';
import HorizontalScroll from 'react-scroll-horizontal';

const Profile = () => {
  const child = { width: `300em`, height: `100%` };
  return (
    <div className='app'>
      {' '}
      <HorizontalScroll>
        <div style={child} className='flex gap-x-14'>
          <h2>fjfkjdkjd</h2>
          <h2>fjfkjdkjd</h2>
          <h2>fjfkjdkjd</h2>
          <h2>fjfkjdkjd</h2>
          <h2>fjfkjdkjd</h2>
        </div>
      </HorizontalScroll>
    </div>
  );
};

export default Profile;

{
  /* <section>
      <InitialTransition />
      <PageNav />
      <div>Profile</div>;
    </section> */
}
