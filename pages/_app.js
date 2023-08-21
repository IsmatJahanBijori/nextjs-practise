import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'
// import styles from "blog1.css"
//global css is used here and created in styles folder
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>First App</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />

    </div>
  )
}
