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

                  <h1 className="hero-title text-secondary mt-2 mb-4">
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
                  src="images/sharing-design-ideas-with-family.jpg"
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

        <section
          className="reviews-section section-padding pb-0"
          id="section_4"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <small className="section-small-title">Happy customers.</small>

                <h2 className="mt-2 mb-4">Reviews</h2>

                <div className="owl-carousel reviews-carousel">
                  <div className="reviews-thumb">
                    <div className="reviews-body">
                      <h4>
                        Moso Interior is the most suitable website layout.
                      </h4>
                    </div>

                    <div className="reviews-bottom reviews-bottom-up d-flex align-items-center">
                      <img
                        src="images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg"
                        className="avatar-image img-fluid"
                        alt="pretty-blonde-woman-wearing-white-t-shirt"
                      />

                      <div className="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                        <p className="text-white mb-0">
                          <strong>Sandy</strong>, <small>CEO</small>
                        </p>

                        <div className="reviews-icons">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="reviews-thumb">
                    <div className="reviews-body">
                      <h4>
                        Explore more HTML Templates to download for your
                        website.
                      </h4>
                    </div>

                    <div className="reviews-bottom reviews-bottom-up d-flex align-items-center">
                      <img
                        src="images/avatar/studio-portrait-emotional-happy-funny-smiling-boyfriend-man-with-heavy-beard-stands-with-arms-crossed-dressed-red-t-shirt-isolated-blue.jpg"
                        className="avatar-image img-fluid"
                        alt=""
                      />

                      <div className="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                        <p className="text-white mb-0">
                          <strong>Jack</strong>, <small>Partner</small>
                        </p>

                        <div className="reviews-icons">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                          <i className="bi-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="reviews-thumb">
                    <div className="reviews-body">
                      <h4>
                        Please recommend Tooplate website to your friends.
                      </h4>
                    </div>

                    <div className="reviews-bottom reviews-bottom-up d-flex align-items-center">
                      <img
                        src="images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg"
                        className="avatar-image img-fluid"
                        alt=""
                      />

                      <div className="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                        <p className="text-white mb-0">
                          <strong>Helen</strong>, <small>Client</small>
                        </p>

                        <div className="reviews-icons">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="reviews-thumb">
                    <div className="reviews-body">
                      <h4>
                        This Bootstrap 5 layout is free to use for your website.
                      </h4>
                    </div>

                    <div className="reviews-bottom reviews-bottom-up d-flex align-items-center">
                      <img
                        src="images/avatar/portrait-young-redhead-bearded-male-wears-white-t-shirt-keeps-his-eyes-closed-smiling-feels-happy-yellow.jpg"
                        className="avatar-image img-fluid"
                        alt=""
                      />

                      <div className="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                        <p className="text-white mb-0">
                          <strong>Bill</strong>, <small>Designer</small>
                        </p>

                        <div className="reviews-icons">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                          <i className="bi-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="reviews-thumb">
                    <div className="reviews-body">
                      <h4>
                        Thank you for visiting Tooplate to download free
                        templates.
                      </h4>
                    </div>

                    <div className="reviews-bottom reviews-bottom-up d-flex align-items-center">
                      <img
                        src="images/avatar/portrait-young-beautiful-woman-gesticulating.jpg"
                        className="avatar-image img-fluid"
                        alt=""
                      />

                      <div className="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                        <p className="text-white mb-0">
                          <strong>Susan</strong>, <small>Boss</small>
                        </p>

                        <div className="reviews-icons">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-12">
                  <p className="d-flex justify-content-center align-items-center mt-lg-5">
                    Write some reviews on
                    <a href="#" className="custom-btn btn ms-3">
                      <i className="bi-facebook me-2"></i>facebook
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="section_5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f9f9f9"
              fillOpacity="1"
              d="M0,96L40,117.3C80,139,160,181,240,186.7C320,192,400,160,480,149.3C560,139,640,149,720,176C800,203,880,245,960,250.7C1040,256,1120,224,1200,229.3C1280,235,1360,277,1400,298.7L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <small className="section-small-title">Ask anything.</small>

                <h2 className="mb-4">Say Hello</h2>
              </div>

              <div className="col-lg-6 col-12">
                <form
                  className="custom-form contact-form"
                  action="#"
                  method="post"
                  role="form"
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="input-group align-items-center">
                        <label htmlFor="first-name">First Name</label>

                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          className="form-control"
                          placeholder="Jack"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="input-group align-items-center">
                        <label htmlFor="last-name">Last Name</label>

                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          className="form-control"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input-group align-items-center">
                    <label htmlFor="email">Email Address</label>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Jackdoe@gmail.com"
                      required
                    />
                  </div>

                  <div className="input-group textarea-group">
                    <label htmlFor="message">Message</label>

                    <textarea
                      name="message"
                      rows="6"
                      className="form-control"
                      id="message"
                      placeholder="What can we help you?"
                    ></textarea>
                  </div>

                  <div className="col-lg-3 col-md-4 col-6">
                    <button type="submit" className="form-control">
                      Send
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <div className="custom-block">
                  <h3 className="text-white mb-2">Store</h3>

                  <p className="text-white mb-2">
                    <i className="contact-icon bi-geo-alt me-1"></i>
                    102 Utah Road, Berlin, Germany
                  </p>

                  <h3 className="text-white mt-3 mb-2">Contact Info</h3>

                  <div className="d-flex flex-wrap">
                    <p className="text-white mb-2 me-4">
                      <i className="contact-icon bi-telephone me-1"></i>

                      <a href="tel: 090-080-0760" className="text-white">
                        090-080-0760
                      </a>
                    </p>

                    <p className="text-white">
                      <i className="contact-icon bi-envelope me-1"></i>

                      <a href="mailto:info@company.com" className="text-white">
                        info@company.com
                      </a>
                    </p>
                  </div>

                  {/* <iframe
                    className="google-map mt-2"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4800.184803804974!2d-0.10174304922518053!3d51.5087879746898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605f6fc62fa3d%3A0xc5a39e7cf4e3a9a4!2sTate%20Modern%20Garden!5e1!3m2!1sen!2smm!4v1679331839559!5m2!1sen!2smm"
                    width="100%"
                    height="220"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe> */}
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
    </>
  );
};

export default Body;
