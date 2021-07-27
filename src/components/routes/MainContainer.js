import React, { Fragment, useState, useEffect } from "react";
import axios from "../../api/Api";
import Spinner from "../spinner/Spinner";
import Search from "../search/Search";
import CardContainer from "./CardContainer";

const MainContainer = () => {
  const [nasaData, setNasaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [errMessage, setErrMessage] = useState("");
  const [searchData, setSearchData] = useState({
    text: "star",
    keywords: undefined,
    location: undefined,
    title: undefined,
    year_start: undefined,
    year_end: undefined,
  });

  // pagination 숫자 10씩 증가/감소
  const [tenEach, setTenEach] = useState(0);
  // query의 page
  const [pages, setPages] = useState(1);
  // total_hit value를 100개씩 나눴을 때 page의 개수
  const [groupPages, setGroupPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      await axios
        .get("/search", {
          params: {
            page: pages,
            q: searchData.text,
            keywords: searchData.keywords,
            location: searchData.location,
            title: searchData.title,
            year_start: searchData.year_start,
            year_end: searchData.year_end,
          },
        })
        .then(function (res) {
          setIsLoading(false);
          setNasaData(res.data.collection.items);
          setTotal(res.data.collection.metadata.total_hits);
          if (res.data.collection.metadata.total_hits > 100) {
            setGroupPages(
              Math.ceil(res.data.collection.metadata.total_hits / 100)
            );
          } else {
            setGroupPages(0);
          }
          setErrMessage("");
        })
        .catch(function (err) {
          if (err.response) {
            switch (err.response.status) {
              case 400:
                setErrMessage(
                  "Bad request... 검색창이 비어있어 데이터를 받아오지 못했습니다."
                );
                break;
              case 404:
                setErrMessage("Not found...");
                break;
              case 500:
              case 502:
              case 503:
              case 504:
                setErrMessage("Internal Server Error ...");
                break;
              default:
                setErrMessage("Axios Error...");
            }
          } else if (err.request) {
            setErrMessage("Request Error...");
          } else {
            setErrMessage("Unknown Error...");
          }
          setIsLoading(true);
          setNasaData(null);
          setTotal(0);
        });
    };
    fetchPosts();
  }, [searchData, pages]);

  // 검색한 경우(검색 결과 update, pagination 초기화)
  const handleSearch = (data) => {
    setSearchData(data);
    setCurrentPage(1);
    setPages(1);
    setTenEach(0);
  };

  // 이전 100개의 Data가 있는 페이지 불러오기
  // pagination 숫자 감소
  const handlePageDown = () => {
    if (pages > 1) {
      setPages(pages - 1);
    }
    if (tenEach >= 10) {
      setTenEach(tenEach - 10);
    }
  };

  // 다음 100개의 Data가 있는 페이지 불러오기
  // pagination 숫자 증가
  const handlePageUp = () => {
    if (pages < groupPages) {
      setPages(pages + 1);
    }
    if (groupPages > 1 && tenEach < (groupPages - 1) * 10) {
      setTenEach(tenEach + 10);
    }
  };

  // 현재 페이지 값 설정
  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  // 검색 결과 출력 에러(에러메시지)/로딩/검색결과(결과 값, Pagination 함수)
  const searchResult = (
    <Fragment>
      {errMessage ? (
        <div className=" container alert alert-danger mt-3" role="alert">
          {errMessage}
        </div>
      ) : isLoading ? (
        <Spinner />
      ) : (
        <CardContainer
          nasaData={nasaData}
          handlePageUp={handlePageUp}
          handlePageDown={handlePageDown}
          currentPage={currentPage}
          groupPages={groupPages}
          handleCurrentPage={handleCurrentPage}
          tenEach={tenEach}
        />
      )}
    </Fragment>
  );

  return (
    <Fragment>
      <div className="alert-primary">
        <Search onCreate={handleSearch} />
      </div>
      <div className="container mt-3">
        {isLoading ? "검색중..." : <h5>전체 검색 결과: {total}</h5>}
      </div>
      {searchResult}
    </Fragment>
  );
};

export default MainContainer;
