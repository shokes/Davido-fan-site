import React from 'react';
import SingleMusicNav from '../components/Navigation/SingleMusicNav';
import { useRouter } from 'next/router';
import albums from '../data';

const id = () => {
  const router = useRouter();
  const { id } = router.query;
  const music = albums.find((item) => item.id === Number(id));
  console.log(music);
  return (
    <section>
      <SingleMusicNav />
      <div>
        <h3>{id}</h3>
      </div>
    </section>
  );
};

export default id;
