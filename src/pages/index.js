import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import '../app/global.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Xxtractz | Musa Baloyi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
            <h1 className={styles.title}>
                Read <Link href="/blog/post"> This</Link>
            </h1>
        </main>
    </div>
  );
}
