import React from 'react';
import SingleMusicNav from '../components/Navigation/SingleMusicNav';
import { useRouter } from 'next/router';
import albums from '../data';
import Image from 'next/image';
import SingleAlbumTrans from '../components/SingleAlbumTrans/SingleAlbumTrans';
import Head from 'next/head';

const MusicDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const music = albums.find((item) => item.id === Number(id));

  return (
    <section>
      <Head>
        <title> Davido - {music && music.title} </title>
      </Head>
      <SingleAlbumTrans />
      <SingleMusicNav />
      <div className='container flex gap-40 items-center '>
        <Image src={`${music && music.cover.src}`} width={500} height={500} />
        <div>
          <span className='text-lg'>{music && music.year}</span>
          <h3 className='font-bold text-2xl capitalize'>
            {music && music.title}
          </h3>
          {music?.songs.map((item, index) => {
            return (
              <div className='flex w-[15rem] mb-1'>
                <span className='mr-1  w-1/4'>{index + 1} </span>
                <p className='w-3/4'> {item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MusicDetails;
