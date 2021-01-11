import Head from 'next/head';
import Menubar from './menubar';
import Scene from './threejs/scene';
import Heading from './typography/heading';

const ContentContainer = ({ children, title }) => (
  <div>
    <Head>
      <title>Austin Gray | {title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="h-screen w-screen fixed z-0">
      <Scene />
    </div>

    <div className="container p-8 m-auto">
      <Menubar />
    </div>

    <div className="container m-auto relative z-10 text-white p-8">
      <Heading>{title}</Heading>
      {children || 'Coming soon.'}
    </div>
  </div>
);

ContentContainer.defaultProps = { children: '' };

export default ContentContainer;
