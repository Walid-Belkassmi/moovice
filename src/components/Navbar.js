import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/">Home</Link>
          <Link to="/weekly">Weekly</Link>
          <Link to="/popular">Popular</Link>
          <Link to="/favorites">Favorites</Link>
          {/* <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/weekly">Weekly</Link>
              </li>
              <li className="nav-item">
                <Link to="/popular">Popular</Link>
              </li>
              <li className="nav-item">
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
