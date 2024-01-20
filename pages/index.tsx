import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Wrapper from '../components/elements/Wrapper/Wrapper'

export default function Home() {
  return (
    <>
      <Head>
          <title>Транснефть</title>
          <meta 
            name="description" 
            content="Оказание услуг по транспортировке нефти и нефтепродуктов по магистральным трубопроводам Российской Федерации, а также за пределы России" />
          <link 
            rel="icon" 
            href="/favicon.png" />
      </Head>
        <Wrapper>
          <Header />
          <Hero />
        </Wrapper>
        <Footer />
    </>
  )
}
