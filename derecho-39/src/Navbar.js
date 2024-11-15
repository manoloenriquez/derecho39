import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/SantuLogo.png" alt="Santu Logo" className="santulogo" />
      </Link>
      <div className="links">
        <Link to="/home">Colleges</Link>
        <Link to="/eb">Executive Board</Link>
        {/* <Link to="/colleges">Colleges</Link> */}
        <div className="la-item">
          <Link to="/la">LA Agenda</Link>
          <div className="la-dropdown service-dropdown">
            <Link to="/la">Your Batch Legislators</Link>
            <Link to="/agenda">Our LA Agenda</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
