const Footer = () => {
  return (
    <footer className="site-footer section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-5 col-12 mb-3">
            <h3>
              <a href="#" className="custom-link mb-1">
                Moso Interior
              </a>
            </h3>

            <p className="text-white">
              Since 1986, We crafted interior products for better spaces
            </p>

            <p className="text-white">
              <a href="#" target="_parent">
                Web Design: React
              </a>
            </p>
          </div>

          <div className="col-lg-3 col-md-3 col-12 ms-lg-auto mb-3">
            <h3 className="text-white mb-3">Store</h3>

            <p className="text-white mt-2">
              <i className="bi-geo-alt"></i>
              Gujarat, India
            </p>
          </div>

          <div className="col-lg-3 col-md-4 col-12 mb-3">
            <h3 className="text-white mb-3">Contact Info</h3>

            <p className="text-white mb-1">
              <i className="bi-telephone me-1"></i>

              <a href="tel: 090-080-0760" className="text-white">
                090-080-0760
              </a>
            </p>

            <p className="text-white mb-0">
              <i className="bi-envelope me-1"></i>

              <a href="mailto:info@company.com" className="text-white">
                info@company.com
              </a>
            </p>
          </div>

          <div className="col-lg-6 col-md-7 copyright-text-wrap col-12 d-flex flex-wrap align-items-center mt-4 ms-auto">
            <p className="copyright-text mb-0 me-4">
              Copyright © Moso Interior 2048
            </p>

            <ul className="social-icon">
              <li className="social-icon-item">
                <a
                  href="#"
                  className="social-icon-link social-icon-twitter bi-twitter"
                ></a>
              </li>

              <li className="social-icon-item">
                <a
                  href="#"
                  className="social-icon-link social-icon-facebook bi-facebook"
                ></a>
              </li>

              <li className="social-icon-item">
                <a
                  href="#"
                  className="social-icon-link social-icon-instagram bi-instagram"
                ></a>
              </li>

              <li className="social-icon-item">
                <a
                  href="#"
                  className="social-icon-link social-icon-pinterest bi-pinterest"
                ></a>
              </li>

              <li className="social-icon-item">
                <a
                  href="#"
                  className="social-icon-link social-icon-whatsapp bi-whatsapp"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
