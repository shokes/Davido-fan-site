import React from 'react';
import SingleMusicNav from '../components/Navigation/SingleMusicNav';
import { useRouter } from 'next/router';
import albums from '../data';
import Image from 'next/image';
import SingleAlbumTrans from '../components/SingleAlbumTrans/SingleAlbumTrans';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const MusicDetails = () => {
  const router = useRouter();
  const [idNumber, setIdNumber] = useState<any>(2);
  //const [modalWriteUp, setmodalWriteUp] = useState<any>();
  // const { id } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    // codes using router.query
    // const { id } = router.query;
    const id = router.query.id ? +router.query.id : undefined;

    // let id = +router.query.id;

    setIdNumber(id);
  }, [router.isReady]);

  //  const music = albums.find((item) => item.id === Number(id));
  const music = albums.find((item) => item.id === idNumber);
  return (
    <section className='pb-7 lg:pb-0'>
      <Head>
        <title> Davido - {music?.title} </title>
      </Head>
      <SingleAlbumTrans />
      <SingleMusicNav />
      <div className='container flex flex-col lg:flex-row gap-10 lg:gap-40 items-center '>
        <Image src={`${music?.cover.src}`} width={500} height={500} />
        <div>
          <span className='text-lg'>{music?.year}</span>
          <h3 className='font-bold text-2xl capitalize'>{music?.title}</h3>
          {music?.songs.map((item, index) => {
            return (
              <div className='flex  w-[26rem] mb-1'>
                <span className='mr-1  w-1/6'>{index + 1} </span>
                <p className='w-7/4'> {item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MusicDetails;
