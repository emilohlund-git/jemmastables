import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jemmastables</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative flex justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="/videos/maja.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>
      <main>
      </main>
    </div>
  )
}


export default Home
