import Link from 'next/link';

const Menubar = () => (
  <div className="text-yellow-200 z-10 relative sm:flex">
    <div className="flex-none p-4 text-3xl">
      <Link href="/">Austin Gray</Link>
    </div>
    <div className="flex-grow"></div>
    <div className="flex-none p-4 text-xl">
      <Link href="/">Home</Link> \\ <Link href="/music">Music</Link> \\{' '}
      <Link href="/games">Games</Link> \\ <Link href="/events">Events</Link> \\{' '}
      <Link href="/shop">Shop</Link> \\ <Link href="/contact">Contact</Link>
    </div>
  </div>
);

export default Menubar;
