import Image from 'next/image';
import Link from 'next/Link';
import { useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

function HeroNavbar() {
  const [session] = useSession();

  // Responsive menu
  useEffect(() => {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }, []);

  // Change header background when scrolling
  useEffect(() => {
    function scrollValue() {
      const navbar = document.getElementById('navbar');
      const scroll = window.scrollY;
      if (scroll < document.documentElement.clientHeight * 0.58) {
        navbar.classList.remove('newBgColor');
        navbar.classList.add('oldBgColor');
      } else {
        navbar.classList.remove('oldBgColor');
        navbar.classList.add('newBgColor');
      }
    }
    window.addEventListener('scroll', scrollValue);
  }, []);

  return <nav className="fixed w-screen text-gray-400" id="navbar">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          {/* logo */}
          <div className="">
            <div className="px-2 py-5 text-logo-pink tracking-wider font-bold flex items-center text-lg" >
              <Link href="/">CodeSnip</Link>
            </div>
          </div>

          {/* Primary nav */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="link">
              <Link href="/get-started">Get Started</Link>
            </div>
            <div className="link">
              <Link href="/docs">Documentation</Link>
            </div>
            <div className="link">
              <Link href="/pricing">Pricing</Link>
            </div>
            <div className="link">
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>

        {/* Secondary nav */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="link" onClick={!session ? signIn : null}>
            <Link href="/portal">Portal</Link>
          </div>
          <p>{session && session.user.name}</p>
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
      <div className="text-center pb-6 text-md">
        <div className="menuLink">
          <Link href="/get-started">Get Started</Link>
        </div>
        <div className="menuLink">
          <Link href="/docs">Documentation</Link>
        </div>
        <div className="menuLink">
          <Link href="/pricing">Pricing</Link>
        </div>
        <div className="menuLink">
          <Link href="/contact">Contact</Link>
        </div>
        <div className="menuLink" onClick={!session ? signIn : null}>
          <Link href="/portal">Portal</Link>
        </div>
      </div>
    </div>

  </nav>
}

export default HeroNavbar;
