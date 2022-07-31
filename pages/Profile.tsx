import React from 'react';
import PageNav from '../components/Navigation/PageNav';
import InitialTransition from '../components/InitialTransition/InitialTransition';

const Profile = () => {
  return (
    <section>
      <InitialTransition />
      <PageNav />
      <div>Profile</div>;
    </section>
  );
};

export default Profile;
