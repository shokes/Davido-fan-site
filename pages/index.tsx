import Hero from '../components/Hero/Hero';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

type Props = {
  isVisible: boolean;
};

const home = ({ isVisible }: Props) => {
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
