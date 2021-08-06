import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon Clone</title>
      </Head>
      <Header/>
      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner/>
        {/* Product Render */}
        <ProductFeed/>
      </main>
    </div>
  )
}