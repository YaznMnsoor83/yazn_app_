import '@/styles/globals.css'
import  Layout from '../components/Layout';
import type { AppProps } from 'next/app'
import Modal from '../components/Modal';
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import { Toaster } from 'react-hot-toast';
import {SessionProvider} from "next-auth/react"
import EditModal from '@/components/modals/EditModal';
import Navbar from '@/hooks/Navbar';
import Head from "next/head"
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSomeData().then(() => {
      setLoading(false);
    });
  }, []);

  

  if (loading) {
    return <div className="w-screen h-[100vh] flex items-center justify-center " >
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Yaznbook.png" />
<title>Yaznbook | Loading...</title>
        </Head>
<img src="/Yaznbook.png" className="w-[59px] h-[59px] rounded-[50px]" />

      </div>
  }
  return (
    <div className="scrollbar-hide" >
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Yaznbook.png" />
<title>Yaznbook</title>
        </Head>
 <SessionProvider session={pageProps.session} >
  <Navbar />
<Toaster />
 
       <EditModal />      
 <RegisterModal />
 <LoginModal />
 <br />
 <br />
 <br />

 <Layout >
 <Component className=" " {...pageProps} />

  </Layout>
  </SessionProvider>
  </div>
  )
}

async function fetchSomeData() {
  // Here goes your actual data fetching method
  // For the sake of this example, it just waits for 2 seconds
  return new Promise((resolve) => setTimeout(resolve, 20));
}