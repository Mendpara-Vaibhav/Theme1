import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Moso <span className="tooplate-red">Inter</span>
          <span className="tooplate-green">ior</span>
        </NavLink>

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
              <NavLink className="nav-link click-scroll" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link click-scroll" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle click-scroll"
                to="/shop"
                id="navbarLightDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </NavLink>

              <ul
                className="dropdown-menu dropdown-menu-light"
                aria-labelledby="navbarLightDropdownMenuLink"
              >
                <li>
                  <NavLink className="dropdown-item" to="/shop/shoplisting">
                    Shop Listing
                  </NavLink>
                </li>

                <li>
                  <NavLink className="dropdown-item" to="/shop/shopdetail">
                    Shop Detail
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link click-scroll" to="/reviews">
                Reviews
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link click-scroll" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
