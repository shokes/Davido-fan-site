import Hero from '../components/Hero/Hero';
import Head from 'next/head';
import Navigation from '../components/Navigation/Navigation';

const home = () => {
  document.body.style.overflow = 'hidden';
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
