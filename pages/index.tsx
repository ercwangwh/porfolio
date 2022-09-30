import { Suspense } from 'react';
import Head from 'next/head';
import Container from '../components/Container';
import Intro from '../components/Intro';
import Cards from '../components/Cards';
import Skills from '../components/Skills';

function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <Intro />

        <Skills />

        <Cards />
      </Container>
    </Suspense>
  );
}

export default Home;
