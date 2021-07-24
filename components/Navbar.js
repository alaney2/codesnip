import Image from 'next/image';
import logo from '../public/logo.svg';
import Link from 'next/Link';

function Navbar() {
  return <div className="flex items-center justify-evenly p-4">
    <div className="px-4 text-logo-purple dark:text-lavender text-2xl tracking-widest align-bottom">
      <Link href="/">codesnip</Link>
    </div>

    <div className="space-x-4 navbar-button">
      <Link href="/get-started" className="navbar-button">Get Started</Link>
      <Link href="/docs">Documentation</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/contact">Contact</Link>
    </div>

    <div>
      <button className="navbar-button">Portal</button>
    </div>
  </div>;
}

export default Navbar;
