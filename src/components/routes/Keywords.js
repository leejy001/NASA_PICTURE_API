import React, { Fragment } from "react";
import KeywordItems from "./KeywordItems";

const Keywords = ({ keywords }) => {
  return (
    <Fragment>
      <div className="keyword-container">
        {Array.isArray(keywords)
          ? keywords.map((keyword) => {
              let words = keyword.split(",");
              return <KeywordItems key={words} words={words} />;
            })
          : "Not keywords"}
      </div>
    </Fragment>
  );
};

export default Keywords;
