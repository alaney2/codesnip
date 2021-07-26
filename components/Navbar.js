import Image from 'next/image';
import Link from 'next/Link';
import { useEffect } from 'react';

function Navbar() {
  // return <div className="flex p-4 items-center">
  //   <div className="flex flex-1 justify-center mr-auto px-4 text-logo-purple dark:text-lavender text-2xl tracking-widest align-bottom">
  //     <Link href="/">codesnip</Link>
  //   </div>

  //   <div className="flex flex-1 justify-center space-x-4 navbar-button">
  //     <Link href="/get-started" className="navbar-button">Get Started</Link>
  //     <Link href="/docs">Documentation</Link>
  //     <Link href="/pricing">Pricing</Link>
  //     <Link href="/contact">Contact</Link>
  //   </div>

  //   <div className="flex flex-1 justify-center ml-auto navbar-button">
  //     <Link href="/portal">Portal</Link>
  //   </div>
  // </div>;
  useEffect(() => {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }, [])

  return <nav className="outline-black">
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          {/* logo */}
          <div className="">
            <div className="px-2 py-5 text-logo-purple dark:text-lavender tracking-wide font-bold flex items-center text-lg" >
              <Link href="/">Codesnip</Link>
            </div>
          </div>

          {/* Primary nav */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="space-x-3 space-y-5">
              <Link href="/get-started">Get Started</Link>
              <Link href="/docs">Documentation</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>

        {/* Secondary nav */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="space-x-3 space-y-5">
            <Link href="/portal">Portal</Link>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button className="mobile-menu-button">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div className="mobile-menu hidden md:hidden">
      <div className=" text-md">
        <div className="block px-4 py-2">
          <Link href="/get-started">Get Started</Link>
        </div>
        <div className="block px-4 py-2">
          <Link href="/docs">Documentation</Link>
        </div>
        <div className="block px-4 py-2">
          <Link href="/pricing">Pricing</Link>
        </div>
        <div className="block px-4 py-2">
          <Link href="/contact">Contact</Link>
        </div>
        <div className="block px-4 py-2">
          <Link href="/portal">Portal</Link>
        </div>
      </div>
    </div>

  </nav>
}

export default Navbar;
