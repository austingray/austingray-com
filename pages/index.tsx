import Head from 'next/head';
import Scene from '../components/Threejs/scene';
import Banner from '../components/banner';

const Index = () => (
  <div>
    <Head>
      <title>Austin Gray | Music | Programming</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="h-screen w-screen fixed z-0">
      <Scene />
    </div>

    <div className="container p-8 m-auto">
      <Banner />
    </div>
  </div>
);

export default Index;
