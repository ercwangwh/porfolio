import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../components/Container';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container />
    </div>
  );
};

export default Home;
