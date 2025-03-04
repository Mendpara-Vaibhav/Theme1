import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <section className="error-section">
        <div id="error-text">
          <figure>
            <img
              //   src="https://media.tenor.com/IHdlTRsmcS4AAAAM/404.gif"
              src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-animation-download-in-lottie-json-gif-static-svg-file-formats--not-found-web-the-ultimate-pack-design-development-animations-3299960.gif"
              alt="404 page"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">
              . The page you were looking for could not be found
            </p>
            <p className="p-b">... Back to previous page</p>
          </div>
        </div>

        <button className="custom-btn" onClick={handleGoBack}>
          Go Back
        </button>
      </section>
    </>
  );
};

export default ErrorPage;
