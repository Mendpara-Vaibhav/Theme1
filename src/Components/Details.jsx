import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Details = () => {
  const [idData, setIdData] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(params);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos/" + id
  //     );
  //     const data = await res.json();
  //     // console.log(data);
  //     setIdData(data);
  //   };
  //   if (id) {
  //     fetchData();
  //   }
  // }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id < 1 || id > 200 || isNaN(id)) {
          setError(true);
          return;
        }

        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos/" + id
        );

        if (res.ok) {
          const data = await res.json();
          // console.log(data);
          setIdData(data);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError(true);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <section className="error-section">
        {/* <div>My Data Details ID is {id}</div> */}
        <h3>User ID: {idData?.userId}</h3>
        <h3>ID: {idData?.id}</h3>
        <h3>Title: {idData?.title}</h3>
        <h3>Completed: {idData?.completed ? "TRUE" : "FALSE"}</h3>

        <button className="custom-btn" onClick={handleGoBack}>
          Go Back
        </button>
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

export default Details;
