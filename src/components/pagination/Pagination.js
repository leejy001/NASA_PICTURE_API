import React, { Fragment } from "react";
import "./Pagination.css";

const Pagination = (props) => {
  const {
    currentPage,
    postsPerPage,
    totalPosts,
    groupPages,
    paginate,
    tenEach,
    pageDown,
    pageUp,
  } = props;
  const pageNumbers = [];

  // Page 번호 삽입
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container d-flex justify-content-center">
      {groupPages > 0 ? (
        <Fragment>
          <button className="btn-prev btn btn-primary" onClick={pageDown}>
            이전
          </button>
          <ul className="pagination">
            {pageNumbers.map((page) =>
              currentPage === page ? (
                <li className="page-item active" key={page}>
                  <a
                    className="page-link"
                    onClick={() => paginate(page)}
                    href="!#"
                  >
                    {tenEach > 0 ? page + tenEach : page}
                  </a>
                </li>
              ) : (
                <li className="page-item" key={page}>
                  <a
                    className="page-link"
                    onClick={() => paginate(page)}
                    href="!#"
                  >
                    {tenEach > 0 ? page + tenEach : page}
                  </a>
                </li>
              )
            )}
          </ul>
          <button className="btn-next btn btn-primary" onClick={pageUp}>
            다음
          </button>
        </Fragment>
      ) : (
        <ul className="pagination">
          {pageNumbers.map((page) =>
            currentPage === page ? (
              <li className="page-item active" key={page}>
                <a
                  className="page-link"
                  onClick={() => paginate(page)}
                  href="!#"
                >
                  {tenEach > 0 ? page + tenEach : page}
                </a>
              </li>
            ) : (
              <li className="page-item" key={page}>
                <a
                  className="page-link"
                  onClick={() => paginate(page)}
                  href="!#"
                >
                  {tenEach > 0 ? page + tenEach : page}
                </a>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default Pagination;
