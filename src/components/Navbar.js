import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-light fs-2">
          Moovice
        </Link>
        <button
          className="navbar-toggler bg-warning"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-warning fs-4">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/popular" className="nav-link text-warning fs-4">
                Popular
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/favorites" className="nav-link text-warning fs-4">
                Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/weekly" className="nav-link text-warning fs-4">
                Weekly
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
