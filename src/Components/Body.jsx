const Body = () => {
  return (
    <>
      <main>
        <section
          className="hero-section hero-slide d-flex justify-content-center align-items-center"
          id="section_1"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 text-center mx-auto">
                <div className="hero-section-text">
                  <small className="section-small-title">
                    Welcome to Moso Interior
                    <i className="hero-icon bi-house"></i>
                  </small>

                  <h1 className="hero-title text-white mt-2 mb-4">
                    Decorate a beautiful interior for your space
                  </h1>

                  <form
                    className="custom-form hero-form"
                    action="#"
                    method="get"
                    role="form"
                  >
                    <div className="row">
                      <div className="col-lg-5 col-md-6 col-12">
                        <div className="input-group align-items-center">
                          <label htmlFor="product-name">Product</label>
                          <input
                            type="text"
                            name="product-name"
                            id="product-name"
                            className="form-control"
                            placeholder="Bathroom, Living Room..."
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 col-12">
                        <div className="input-group align-items-center">
                          <label htmlFor="last-name">Price</label>

                          <select
                            name="price-range"
                            className="form-select form-control"
                            id="price-range"
                            aria-label="Default select example"
                          >
                            <option value="500" selected>
                              $500 to $990
                            </option>
                            <option value="1000">$1,000 - 2,900</option>
                            <option value="3000">$3,000 - 5,000</option>
                            <option value="5000">$5,000 - 10,000</option>
                            <option value="11000">$11,000 - 25,000</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-2 col-md-6 col-12">
                        <button type="submit" className="form-control">
                          Search
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="hero-btn d-flex justify-content-center align-items-center">
                    <a
                      className="bi-arrow-down hero-btn-link smoothscroll"
                      href="#section_2"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section section-padding" id="section_2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12">
                <small className="section-small-title">Our Story</small>

                <h2 className="mt-2 mb-4">
                  <span className="text-muted">Introducing</span> Moso
                </h2>

                <h4 className="text-muted mb-3">
                  Since 1986, We crafted interior products for better spaces
                </h4>

                <p>
                  Moso Interior is a free Bootstrap 5 HTML CSS template for your
                  website. Tooplate is one of the best websites to download 100%
                  free HTML Templates for web designers and developers around
                  the world. Thank you for visiting.
                </p>
              </div>

              <div className="col-lg-3 col-md-5 col-5 mx-lg-auto">
                <img
                  src="/images/sharing-design-ideas-with-family.jpg"
                  className="about-image about-image-small img-fluid"
                  alt="sharing-design-ideas-with-family"
                />
              </div>

              <div className="col-lg-4 col-md-7 col-7">
                <img
                  src="images/living-room-interior-wall-mockup-warm-tones-with-leather-sofa-which-is-kitchen-3d-rendering.jpg"
                  className="about-image img-fluid"
                  alt="living-room-interior-wall-mockup-warm-tones-with-leather-sofa-which-is-kitchen-3d-rendering"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="featured-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-12">
                <div className="custom-block featured-custom-block">
                  <h2 className="mt-2 mb-4">Opening Hours</h2>

                  <div className="d-flex">
                    <i className="featured-icon bi-clock me-3"></i>

                    <div>
                      <p className="mb-2">
                        Mon - Friday ~
                        <strong className="d-inline">8:00 AM - 6:00 PM</strong>
                      </p>

                      <p className="mb-2">
                        Saturday ~
                        <strong className="d-inline">
                          10:00 AM - 10:00 PM
                        </strong>
                      </p>

                      <p>Sunday ~ Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="shop-section section-padding" id="section_3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <small className="section-small-title">Moso Design Shop</small>

                <h2 className="mt-2 mb-4">
                  <span className="tooplate-red">Interior</span> Products
                </h2>
              </div>

              <div className="col-lg-6 col-12">
                <div className="shop-thumb">
                  <div className="shop-image-wrap">
                    <a href="shop-detail.html">
                      <img
                        src="images/shop/minimal-bathroom-interior-design-with-wooden-furniture.jpg"
                        className="shop-image img-fluid"
                        alt=""
                      />
                    </a>

                    <div className="shop-icons-wrap">
                      <div className="shop-icons d-flex flex-column align-items-center">
                        <a href="#" className="shop-icon bi-heart"></a>

                        <a href="#" className="shop-icon bi-bookmark"></a>
                      </div>

                      <p className="shop-pricing mb-0 mt-3">
                        <span className="badge custom-badge">$3,600</span>
                      </p>
                    </div>

                    <div className="shop-btn-wrap">
                      <a
                        href="shop-detail.html"
                        className="shop-btn custom-btn btn d-flex align-items-center align-items-center"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>

                  <div className="shop-body">
                    <h4>Bathroom</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div className="shop-thumb">
                  <div className="shop-image-wrap">
                    <a href="shop-detail.html">
                      <img
                        src="images/shop/mock-up-poster-modern-dining-room-interior-design-with-white-empty-wall.jpg"
                        className="shop-image img-fluid"
                        alt=""
                      />
                    </a>

                    <div className="shop-icons-wrap">
                      <div className="shop-icons d-flex flex-column align-items-center">
                        <a href="#" className="shop-icon bi-heart"></a>

                        <a href="#" className="shop-icon bi-bookmark"></a>
                      </div>

                      <p className="shop-pricing mb-0 mt-3">
                        <span className="badge custom-badge">$6,400</span>
                      </p>
                    </div>

                    <div className="shop-btn-wrap">
                      <a
                        href="shop-detail.html"
                        className="shop-btn custom-btn btn d-flex align-items-center align-items-center"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>

                  <div className="shop-body">
                    <h4>Dining</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="shop-thumb">
                  <div className="shop-image-wrap">
                    <a href="shop-detail.html">
                      <img
                        src="images/shop/green-sofa-white-living-room-with-blank-table-mockup.jpg"
                        className="shop-image img-fluid"
                        alt=""
                      />
                    </a>

                    <div className="shop-icons-wrap">
                      <div className="shop-icons d-flex flex-column align-items-center">
                        <a href="#" className="shop-icon bi-heart"></a>

                        <a href="#" className="shop-icon bi-bookmark"></a>
                      </div>

                      <p className="shop-pricing mb-0 mt-3">
                        <span className="badge custom-badge">$2,400</span>
                      </p>
                    </div>

                    <div className="shop-btn-wrap">
                      <a
                        href="shop-detail.html"
                        className="shop-btn custom-btn btn d-flex align-items-center align-items-center"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>

                  <div className="shop-body">
                    <h4>Living Room</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="shop-thumb">
                  <div className="shop-image-wrap">
                    <a href="shop-detail.html">
                      <img
                        src="images/shop/concept-home-cooking-with-female-chef.jpg"
                        className="shop-image img-fluid"
                        alt=""
                      />
                    </a>

                    <div className="shop-icons-wrap">
                      <div className="shop-icons d-flex flex-column align-items-center">
                        <a href="#" className="shop-icon bi-heart"></a>

                        <a href="#" className="shop-icon bi-bookmark"></a>
                      </div>

                      <p className="shop-pricing mb-0 mt-3">
                        <span className="badge custom-badge">$3,800</span>
                      </p>
                    </div>

                    <div className="shop-btn-wrap">
                      <a
                        href="shop-detail.html"
                        className="shop-btn custom-btn btn d-flex align-items-center align-items-center"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>

                  <div className="shop-body">
                    <h4>Chef Kitchen</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="shop-thumb">
                  <div className="shop-image-wrap">
                    <a href="shop-detail.html">
                      <img
                        src="images/shop/childrens-bed-nursery-cot-velvet-childrens-room.jpg"
                        className="shop-image img-fluid"
                        alt=""
                      />
                    </a>

                    <div className="shop-icons-wrap">
                      <div className="shop-icons d-flex flex-column align-items-center">
                        <a href="#" className="shop-icon bi-heart"></a>

                        <a href="#" className="shop-icon bi-bookmark"></a>
                      </div>

                      <p className="shop-pricing mb-0 mt-3">
                        <span className="badge custom-badge">$850</span>
                      </p>
                    </div>

                    <div className="shop-btn-wrap">
                      <a
                        href="shop-detail.html"
                        className="shop-btn custom-btn btn d-flex align-items-center align-items-center"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>

                  <div className="shop-body">
                    <h4>Childrens Bedroom</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 col-12">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>

                    <li className="page-item active" aria-current="page">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        5
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Body;
