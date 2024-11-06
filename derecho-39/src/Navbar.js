import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/SantuLogo.png" alt="Santu Logo" className="santulogo" />
      </Link>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/eb">Executive Board</Link>
        <Link to="/colleges">Colleges</Link>
        <Link to="/la">LA Agenda</Link>
      </div>
    </nav>
  );
}

export default Navbar;
