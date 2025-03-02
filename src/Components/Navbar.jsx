import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Moso <span className="tooplate-red">Inter</span>
          <span className="tooplate-green">ior</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link click-scroll" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link click-scroll" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle click-scroll"
                to="/shop"
                id="navbarLightDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </Link>

              <ul
                className="dropdown-menu dropdown-menu-light"
                aria-labelledby="navbarLightDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/shop/shoplisting">
                    Shop Listing
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/shop/shopdetail">
                    Shop Detail
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link click-scroll" to="/reviews">
                Reviews
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link click-scroll" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
