import Image from "next/image";
import logo from '../public/logo.svg';

function Navbar() {
  return <div className="flex items-center justify-evenly p-4">
    <div className="px-4">
      <a href="">
        {/* <Image src={logo} alt="Home" width={32} height={32} /> */}
        <span className="text-logo-purple dark:text-lavender text-2xl tracking-widest align-bottom">codesnip</span>
      </a>
    </div>

    <div className="space-x-4">
      <button className="navbar-button">Get Started</button>
      <button className="navbar-button">Documentation</button>
      <button className="navbar-button">Pricing</button>
      <button className="navbar-button">Contact</button>
    </div>

    <div>
      <button className="navbar-button">Portal</button>
    </div>
  </div>;
}

export default Navbar;
