import Hero from '../components/Hero/Hero';

import Head from 'next/head';

const home = () => {
  return (
    <section>
      <Head>
        <title>Davido - Home </title>
      </Head>
      <Hero />
    </section>
  );
};

export default home;
