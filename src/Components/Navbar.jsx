const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          Moso <span className="tooplate-red">Inter</span>
          <span className="tooplate-green">ior</span>
        </a>

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
              <a className="nav-link click-scroll" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link click-scroll" href="#">
                About
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle click-scroll"
                href="#"
                id="navbarLightDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>

              <ul
                className="dropdown-menu dropdown-menu-light"
                aria-labelledby="navbarLightDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Shop Listing
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Shop Detail
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link click-scroll" href="#">
                Reviews
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link click-scroll" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
