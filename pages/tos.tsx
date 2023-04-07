import Image from 'next/image';
import Head from 'next/head';
import EffectImage4 from './assets/home/effect4.png';
import styles from '@/styles/Tos.module.css';
import Header from './container/header/header';
import Tos from './container/tos/tos';
import Footer from './container/footer/footer';

export default function TosPage() {
    return(
        <>
            <Head>
                <title>Tos</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Header />
                <Tos />
                <Footer />
                <Image src={EffectImage4} alt='png' className='absolute top-0 left-0 z-0' draggable ='false' />
            </main>
        </>
    )
}