import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation/Navigation';
import { AnimatePresence } from 'framer-motion';
import InitialTransition from '../components/InitialTransition/InitialTransition';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Navigation />

      <Component {...pageProps} key={router.route} />
    </>
  );
}
export default MyApp;
