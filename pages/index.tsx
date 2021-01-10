import Head from 'next/head';
import Scene from '../components/Threejs/scene';
import Menubar from '../components/Menubar';

const state = {
  camera: {
    position: {
      x: 0,
      y: 6,
      z: 3
    },
    rotation: {
      z: 91
    }
  }
};

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
      <Menubar />
    </div>
  </div>
);

export default Index;
