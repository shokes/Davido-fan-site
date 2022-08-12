import Hero from '../components/Hero/Hero';
import Head from 'next/head';
import Navigation from '../components/Navigation/Navigation';
import React from 'react';

const home = () => {
  // React.useEffect(() => {
  //   // 👇 add class to body element
  //   document.body.style.overflow = 'hidden';

  //   // return () => {
  //   //   // 👇️ optionally remove styles when component unmounts
  //   //   // document.body.style.backgroundColor = null;

  //   //   document.body.style.overflow = 'visible';
  //   // };
  // }, []);
  return (
    <section>
      <Head>
        <title>Davido - Home </title>
      </Head>
      <Navigation />
      <Hero />
    </section>
  );
};

export default home;
