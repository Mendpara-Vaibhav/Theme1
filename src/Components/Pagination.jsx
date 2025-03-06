/* eslint-disable react/prop-types */
const Pagination = ({
  totalData,
  currentPage,
  dataPerPage,
  handlePagination,
}) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => handlePagination(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </a>
          </li>

          {/* {paginationNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              className={currentPage === pageNumber ? "active" : ""}
            >
              <a
                className="page-link"
                onClick={() => handlePagination(pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          ))} */}

          {paginationNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${
                currentPage === pageNumber ? "active" : ""
              }`}
            >
              <a
                className="page-link"
                onClick={() => handlePagination(pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          ))}

          <li className="page-item">
            <button
              className="page-link"
              onClick={() => handlePagination(currentPage + 1)}
              disabled={currentPage === Math.ceil(totalData / dataPerPage)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
