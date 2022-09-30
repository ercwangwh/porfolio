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
        <div className="flex justify-center">
          <Intro></Intro>
        </div>
        <h1 className="flex justify-center">Skills</h1>
        <Skills />
        <h1 className="flex justify-center">dApps</h1>
        <div className="flex justify-center gap-6 flex-col md:flex-row">
          <Cards />
        </div>
      </Container>
    </Suspense>
  );
}

export default Home;
