const Contact = () => {
  return (
    <>
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
    </>
  );
};

export default Contact;
