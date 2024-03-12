import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import '../../style/main.css';
function Navbar() {
  const navRef = useRef();

  function showNavbar() {
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <header className="flex justify-between">
      <img className="h-22 w-40" src={Logo} />
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Service</a>
        <Link to="/Login">Join us</Link>

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
