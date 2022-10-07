import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/components/Header';
import { ThemeProvider } from '@mui/material';
import myTheme from '../src/themes/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={myTheme}>
        <Header />
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
