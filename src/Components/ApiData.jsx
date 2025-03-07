// import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { NavLink } from "react-router-dom";

const ApiData = () => {
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/?_page=${currentPage}&_limit=${dataPerPage}`
      );
      const data = await res.json();
      // console.log(data);

      const totalData = res.headers.get("X-Total-Count");
      // console.log(totalData);

      setData(data);
      setTotalData(totalData);
    };

    fetchData();
  }, [currentPage, dataPerPage]); // Fetch the next page of posts when the current page changes

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos/")
  //     .then((response) => {
  //       // console.log(response.data);
  //       setData(response.data);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <>
      <table className="table table-secondary table-bordered border-primary">
        <thead className="table-dark">
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => {
            return (
              <tr key={index}>
                <td> {element.userId} </td>
                <td>
                  <NavLink to={"/contact/details/" + element.id}>
                    {element.id}
                  </NavLink>
                </td>
                <td> {element.title} </td>
                <td> {element.completed ? "TRUE" : "FALSE"} </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination
        totalData={totalData}
        currentPage={currentPage}
        dataPerPage={dataPerPage}
        handlePagination={handlePagination}
      />
    </>
  );
};

export default ApiData;
