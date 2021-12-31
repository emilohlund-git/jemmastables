import Head from 'next/head';
import React from 'react';
import Partners from '../../components/partners/Partners';
import { withApollo } from '../../utils/withApollo';

interface Props {

}

const samarbetspartners = (props: Props) => {
    return (
        <div>
            <Head>
                <title>Jemmastables - Samarbetspartners</title>
                <meta name="description" content="Företag som Jemma Stables samarbetar med, och vad de arbetar med. Helmo Stables - Horse Partner - Maskin Companiet - Sellamigo - Stall Linell." />
                <meta name="keywords" content="Stall, Ridbana, Hästar, Ridlektioner, Lösdrift, Jemma Stables, Maja Bogren, Hästtävling, Hästtävlingar, Hinder" />
                <meta property="og:url" content="https://jemmastables.com/samarbetspartners" />
                <meta property="og:type" content="website" />
            </Head>
            <Partners />
        </div>
    )
}

export default withApollo({ ssr: true })(samarbetspartners)
