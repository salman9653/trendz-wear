import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-slate-900 text-white'>
      <Head>
        <title>TrendZ Wear</title>
        <meta name="description" content="TrendZ Wear - Wear the Trend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1> TrendZ Wear </h1>
      </main>
    </div>
  )
}
