import React, { Fragment, useState } from "react";
import "./Search.css";

const Search = (props) => {
  const [searchData, setSearchData] = useState("");
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [searchYearStart, setSearchYearStart] = useState("");
  const [searchYearEnd, setSearchYearEnd] = useState("");

  // search input value submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // search data init
    let data = {
      text: undefined,
      keywords: undefined,
      location: undefined,
      title: undefined,
      year_start: undefined,
      year_end: undefined,
    };

    if (searchData !== "") {
      data.text = searchData.trim();
    }
    if (keywords !== "") {
      data.keywords = keywords.trim();
    }
    if (location !== "") {
      data.location = location.trim();
    }
    if (title !== "") {
      data.title = title.trim();
    }
    if (searchYearStart !== "") {
      data.year_start = searchYearStart.trim();
    }
    if (searchYearEnd !== "") {
      data.year_end = searchYearEnd.trim();
    }

    props.onCreate(data);
  };

  // search input value init
  const onClickDelete = () => {
    setSearchData("");
    setKeywords("");
    setLocation("");
    setTitle("");
    setSearchYearStart("");
    setSearchYearEnd("");
  };

  return (
    <Fragment>
      <div className="container d-flex pb-2">
        <div>
          <div className="d-flex justify-content-left">
            <div className="d-flex m-1">
              <div className="input-label">제목</div>
              <input
                className="input-long-text"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="ex) galaxy"
              />
            </div>
            <div className="d-flex m-1">
              <div className="input-label">지역</div>
              <input
                className="input-long-text"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="ex) Kennedy Space Center"
              />
            </div>
            <div className="d-flex m-1">
              <div className="input-label">시작년도</div>
              <input
                className="input-text"
                type="text"
                value={searchYearStart}
                onChange={(e) => setSearchYearStart(e.target.value)}
                placeholder="ex) 2013"
              />
            </div>
          </div>
          <div className="d-flex justify-content-left">
            <div className="d-flex m-1">
              <div className="input-label">텍스트</div>
              <input
                className="input-long-text"
                type="text"
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
                placeholder="ex) star"
              />
            </div>
            <div className="d-flex m-1">
              <div className="input-label">키워드</div>
              <input
                className="input-long-text"
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="ex) Orion"
              />
            </div>
            <div className="d-flex m-1">
              <div className="input-label">끝년도</div>
              <input
                className="input-text"
                type="text"
                value={searchYearEnd}
                onChange={(e) => setSearchYearEnd(e.target.value)}
                placeholder="ex) 2021"
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="btn btn-primary btn-block m-1"
        >
          검색
        </button>
        <button
          onClick={onClickDelete}
          className="btn btn-primary btn-block m-1"
        >
          초기화
        </button>
      </div>
    </Fragment>
  );
};

export default Search;
