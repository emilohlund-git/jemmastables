import type { AppProps } from 'next/app';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SimpleReactLightbox from 'simple-react-lightbox';
import Layout from '../components/Layout';
import { wrapper } from '../redux/store';
import "../styles/globals.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  /* @ts-ignore */
  const store = useStore((state: any) => state);

  return (
    <SimpleReactLightbox>
      {/* @ts-ignore */}
      <PersistGate persistor={store.__persistor} loading={<div>...Loading</div>}>
        <Layout>
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </SimpleReactLightbox>
  )
}

export default wrapper.withRedux(MyApp);
