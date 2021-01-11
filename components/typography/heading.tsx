import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const Heading = (props) => <h1 className="text-9xl mb-5">{props.children}</h1>;

export default Heading;
