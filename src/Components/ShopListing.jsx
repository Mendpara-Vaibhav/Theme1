const ShopListing = () => {
  return (
    <main>
      <header className="site-header d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h1 className="text-white">Shop Listing</h1>
            </div>
          </div>
        </div>
      </header>

      <section className="shop-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-12 me-auto mb-5">
              <form
                className="custom-form filter-form"
                action="#"
                method="get"
                role="form"
              >
                <div className="">
                  <h6 className="filter-form-small-title">Product</h6>

                  <select
                    name="looking-for"
                    className="form-select form-control"
                    id="looking-for"
                    aria-label="Default select example"
                  >
                    <option value="0" selected>
                      What you looking for?
                    </option>
                    <option value="1">Bathroom</option>
                    <option value="2">Dining</option>
                    <option value="3">Living Room</option>
                    <option value="4">Children Bedroom</option>
                    <option value="5">Kitchen</option>
                  </select>
                </div>

                <div className="mt-4">
                  <h6 className="filter-form-small-title">Price range</h6>

                  <div className="form-check">
                    <input
                      name="price-range[]"
                      type="checkbox"
                      className="form-check-input"
                      id="PriceCheckOne"
                      value="500"
                      checked
                    />

                    <label className="form-check-label" htmlFor="PriceCheckOne">
                      below $1,000
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      name="price-range[]"
                      type="checkbox"
                      className="form-check-input"
                      id="PriceCheckTwo"
                      value="1000"
                    />

                    <label className="form-check-label" htmlFor="PriceCheckTwo">
                      $1,000 - $4,900
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      name="price-range[]"
                      type="checkbox"
                      className="form-check-input"
                      id="PriceCheckTwo"
                      value="5000"
                    />

                    <label className="form-check-label" htmlFor="PriceCheckTwo">
                      $5,000 - $9,900
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      name="price-range[]"
                      type="checkbox"
                      className="form-check-input"
                      id="PriceCheckThree"
                      value="10000"
                    />

                    <label
                      className="form-check-label"
                      htmlFor="PriceCheckThree"
                    >
                      $10,000 - $30,000
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <h6 className="filter-form-small-title">Condition</h6>

                  <div className="form-check">
                    <input
                      name="condition[]"
                      type="checkbox"
                      className="form-check-input"
                      id="ConditionCheckOne"
                      value="all"
                      checked
                    />

                    <label
                      className="form-check-label"
                      htmlFor="ConditionCheckOne"
                    >
                      All
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      name="condition[]"
                      type="checkbox"
                      className="form-check-input"
                      id="ConditionCheckTwo"
                      value="excellent"
                    />

                    <label
                      className="form-check-label"
                      htmlFor="ConditionCheckTwo"
                    >
                      Excellent
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      name="condition[]"
                      type="checkbox"
                      className="form-check-input"
                      id="ConditionCheckThree"
                      value="better"
                    />

                    <label
                      className="form-check-label"
                      htmlFor="ConditionCheckThree"
                    >
                      Better
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      name="condition[]"
                      type="checkbox"
                      className="form-check-input"
                      id="ConditionCheckFour"
                      value="good"
                    />

                    <label
                      className="form-check-label"
                      htmlFor="ConditionCheckFour"
                    >
                      Good
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <h6 className="filter-form-small-title">Type</h6>

                  <div className="form-check">
                    <input
                      name="condition[]"
                      type="checkbox"
                      className="form-check-input"
                      id="TypeCheckOne"
                      value=""
                      checked
                    />

                    <label className="form-check-label" htmlFor="TypeCheckOne">
                      Single
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      name="condition[]"
                      type="checkbox"
                      className="form-check-input"
                      id="TypeCheckTwo"
                      value=""
                    />

                    <label className="form-check-label" htmlFor="TypeCheckTwo">
                      Family
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <button type="submit" className="form-control">
                    Apple Filters
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-7 col-md-6 col-12">
              <h2>Products</h2>

              <p className="mb-5">
                <strong>3,648 items</strong> are currently available
              </p>

              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="shop-thumb">
                    <div className="shop-image-wrap">
                      <a href="#">
                        <img
                          src="/images/shop/minimal-bathroom-interior-design-with-wooden-furniture.jpg"
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
                          <span className="badge custom-badge">$8,200</span>
                        </p>
                      </div>

                      <div className="shop-btn-wrap">
                        <a
                          href="#"
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
                      <a href="#">
                        <img
                          src="/images/shop/mock-up-poster-modern-dining-room-interior-design-with-white-empty-wall.jpg"
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
                          <span className="badge custom-badge">$4,800</span>
                        </p>
                      </div>

                      <div className="shop-btn-wrap">
                        <a
                          href="#"
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

                <div className="col-lg-6 col-12">
                  <div className="shop-thumb">
                    <div className="shop-image-wrap">
                      <a href="shop-detail.html">
                        <img
                          src="/images/shop/green-sofa-white-living-room-with-blank-table-mockup.jpg"
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
                          href="#"
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

                <div className="col-lg-6 col-12">
                  <div className="shop-thumb">
                    <div className="shop-image-wrap">
                      <a href="#">
                        <img
                          src="/images/shop/concept-home-cooking-with-female-chef.jpg"
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
                          <span className="badge custom-badge">$6,500</span>
                        </p>
                      </div>

                      <div className="shop-btn-wrap">
                        <a
                          href="#"
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

export default ShopListing;
