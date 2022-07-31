import Hero from '../components/Hero/Hero';
import Head from 'next/head';
import Navigation from '../components/Navigation/Navigation';

const home = () => {
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
