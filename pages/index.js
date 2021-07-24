import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function Home() {
  return <div className="bg">
    <Head>
      <title>CodeSnip</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.svg" />
    </Head>

    <Navbar />

    <main className="">
      <h1 className=" text-4xl mx-56 m-16">
        Coding done right.
      </h1>
    </main>

  </div>;
}
