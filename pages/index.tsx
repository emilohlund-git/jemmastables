import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Instagram from '../components/Instagram';
import { usePartnersQuery } from '../generated/graphql';
import { SRLWrapper } from "simple-react-lightbox";

const Home: NextPage = () => {
  const { data, loading } = usePartnersQuery();

  return (
    <div>
      <Head>
        <title>Jemmastables</title>
        <meta name="description" content="Jemma Stables bedriver en verksamhet som bland annat innefattar uppfödning och utbildning av unghästar, inackordering, utbildning av tävlingshästar (markarbete och hoppning), träningar (hoppning), försäljning av hästar samt försäljning av deras egna hösilage som odlas på markerna utanför gården." />
        <meta name="keywords" content="Stall, Ridbana, Hästar, Ridlektioner, Lösdrift, Jemma Stables, Maja Bogren, Hästtävling, Hästtävlingar, Hinder" />
        <meta property="og:url" content="https://jemmastables.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <header className="aspect-w-16 aspect-h-16 md:aspect-h-7 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="z-10 md:absolute w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="/videos/maja.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="flex items-end md:pb-14">
          <div className="flex w-full h-20 items-center justify-evenly z-20">
            {!loading && data?.partners.map((partner, i: number) => (
              <div key={i} className="w-2/12 md:w-1/12 z-20 filter grayscale invert brightness-0 opacity-50">
                <Image src={partner.logo!.url} alt={partner.name} width={partner.logo!.width} height={partner.logo!.height} layout="responsive" />
              </div>
            ))}
          </div>
        </div>
      </header>
      <main className="pt-1">
        <SRLWrapper>
          <Instagram />
        </SRLWrapper>
      </main>
    </div>
  )
}


export default Home
