import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import store from '../redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider attribute="class"><Provider store={store}><Layout><Component {...pageProps} /></Layout></Provider></ThemeProvider>
}

export default MyApp
