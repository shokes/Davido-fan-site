import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation/Navigation';
// import { motion } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    // <>
    //   <Navigation />
    //   <Component {...pageProps} />
    // </>
    <motion.div
      key={router.route}
      initial='pageInitial'
      animate='pageAnimate'
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <Navigation />
      <Component {...pageProps} />
    </motion.div>
  );
}
export default MyApp;
