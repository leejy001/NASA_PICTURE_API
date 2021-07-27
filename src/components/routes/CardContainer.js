import React, { Fragment, useState } from "react";
import Pagination from "../pagination/Pagination";
import CardList from "./CardList";
import "../pagination/Pagination.css";

const CardContainer = (props) => {
  const {
    nasaData,
    handlePageUp,
    handlePageDown,
    currentPage,
    groupPages,
    handleCurrentPage,
    tenEach,
  } = props;
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // 100개의 data중 10개씩 잘라서 보여줌
  const currentPosts = nasaData.slice(indexOfFirstPost, indexOfLastPost);
  // 현재 페이지 번호 설정
  const paginate = (pageNumber) => handleCurrentPage(pageNumber);

  const pageDown = () => {
    handlePageDown();
    paginate(1);
    window.scrollTo(0, 0);
  };

  const pageUp = () => {
    handlePageUp();
    paginate(1);
    window.scrollTo(0, 0);
  };

  // title에 나오는 description의 html tag 제거
  const stripHTMLtag = (string) => {
    let objStrip = new RegExp();
    objStrip = /[<][^>]*[>]/gi;
    return string.replace(objStrip, "");
  };

  return (
    <Fragment>
      <div className="container p-0">
        <CardList currentPosts={currentPosts} stripHTMLtag={stripHTMLtag} />
      </div>
      <div className="pagination-area">
        <Pagination
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={nasaData.length}
          groupPages={groupPages}
          paginate={paginate}
          tenEach={tenEach}
          pageDown={pageDown}
          pageUp={pageUp}
        />
      </div>
    </Fragment>
  );
};

export default CardContainer;
