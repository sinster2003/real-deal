import '@/styles/globals.css';
import Head from 'next/head';
import NProgress from 'nprogress';
import Layout from '@/components/Layout';
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      
    </Head>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </ChakraProvider>
    </>
  );
}
