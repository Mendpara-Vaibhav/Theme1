const About = () => {
  return (
    <>
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
                free HTML Templates for web designers and developers around the
                world. Thank you for visiting.
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
                      <strong className="d-inline">10:00 AM - 10:00 PM</strong>
                    </p>

                    <p>Sunday ~ Closed</p>
                  </div>
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
    </>
  );
};

export default About;
