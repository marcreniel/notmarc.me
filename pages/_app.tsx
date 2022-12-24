import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 350,
      easing: 'ease-out-cubic',
    });
  });
  return <Component {...pageProps} />
}
