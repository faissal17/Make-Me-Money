import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../style/main.css';
function Navbar() {
  const navRef = useRef();

  function showNavbar() {
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <header>
      <h3 className="text-white font-bold text-2xl uppercase">Make Me Money</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Service</a>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
