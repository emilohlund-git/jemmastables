import React from 'react'
import JemmaCalendar from '../components/calendar/JemmaCalendar'
import { RouteGuard } from '../utils/RouteGuard';
import { withApollo } from '../utils/withApollo';
import Head from 'next/head';

interface Props {

}

const Bokning = (props: Props) => {
    return (
        <div>
            <Head>
                <title>Jemmastables - Bokning</title>
                <meta name="description" content="Boka en tid på våran ridbana via den här bokningskalendern." />
                <meta name="keywords" content="Stall, Ridbana, Hästar, Ridlektioner, Lösdrift, Jemma Stables, Maja Bogren, Hästtävling, Hästtävlingar, Hinder" />
                <meta property="og:url" content="https://jemmastables.com/bokning" />
                <meta property="og:type" content="website" />
            </Head>
            <div className="flex flex-col justify-center dark:bg-gray-900">
         
                <RouteGuard>
                    <JemmaCalendar />
                </RouteGuard>
            </div>
        </div>
    )
}

export default withApollo({ ssr: true })(Bokning)
