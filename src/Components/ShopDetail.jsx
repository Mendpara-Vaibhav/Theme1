const ShopDetails = () => {
  return (
    <main>
      <header className="site-header d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h1 className="text-white">Product Detail</h1>
            </div>
          </div>
        </div>
      </header>

      <section className="shop-detail-bar section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-8 col-12 d-flex">
              <p className="shop-detail-bar-wrap d-flex flex-wrap mb-0">
                <span className="me-2">Price:</span>

                <strong className="shop-pricing-text">$4,500</strong>
              </p>

              <p className="shop-detail-bar-wrap d-flex flex-wrap ms-lg-5 ms-4 mb-0">
                <span className="me-2">Condition:</span>

                <strong className="shop-condition-text">Good</strong>
              </p>

              <p className="shop-detail-bar-wrap d-flex flex-wrap ms-lg-5 ms-4 mb-0">
                <span className="me-2">Type:</span>

                <strong>Family</strong>
              </p>
            </div>

            <div className="col-lg-5 col-md-4 col-12 social-share d-flex align-items-center ms-lg-auto mt-3 mt-lg-0 mt-md-0">
              <p className="mb-0 me-3 ms-lg-auto ms-md-auto">Share:</p>

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
                    className="social-icon-link social-icon-pinterest bi-pinterest"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-detail-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 m-auto">
              <div className="custom-block shop-detail-custom-block">
                <h3 className="mb-3">Introduction to a Dining Room</h3>

                <p>
                  Moso Interior is a free Bootstrap 5 HTML CSS template for your
                  website. You are free to use this template for your commercial
                  websites.
                </p>

                <p>
                  Tooplate is one of the best websites to download 100% free
                  HTML Templates for web designers and developers around the
                  world. Thank you for visiting.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="shop-image-wrap">
                <img
                  src="/images/shop/mock-up-poster-modern-dining-room-interior-design-with-white-empty-wall.jpg"
                  className="shop-image img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-detail-section section-padding section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="shop-image-wrap">
                <img
                  src="/images/shop/minimal-bathroom-interior-design-with-wooden-furniture.jpg"
                  className="shop-image img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-6 col-12 m-auto">
              <div className="custom-block shop-detail-custom-block">
                <h3 className="mb-3">Online Interior Design</h3>

                <p>
                  Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg
                  kohm tokito adipcingi elit, sed do eismuod larehai med.
                </p>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-detail-section section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="shop-thumb">
                <div className="shop-image-wrap">
                  <img
                    src="/images/shop/green-sofa-white-living-room-with-blank-table-mockup.jpg"
                    className="shop-image img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="shop-thumb">
                <div className="shop-image-wrap">
                  <img
                    src="/images/shop/concept-home-cooking-with-female-chef.jpg"
                    className="shop-image img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="shop-thumb">
                <div className="shop-image-wrap">
                  <img
                    src="/images/shop/childrens-bed-nursery-cot-velvet-childrens-room.jpg"
                    className="shop-image img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#36363e"
          fillOpacity="1"
          d="M0,96L40,117.3C80,139,160,181,240,186.7C320,192,400,160,480,149.3C560,139,640,149,720,176C800,203,880,245,960,250.7C1040,256,1120,224,1200,229.3C1280,235,1360,277,1400,298.7L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </main>
  );
};

export default ShopDetails;
