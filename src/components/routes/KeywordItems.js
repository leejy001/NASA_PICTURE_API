import React, { Fragment } from "react";
import "./Card.css";

const KeywordItems = ({ words }) => {
  return (
    <Fragment>
      <div className="keyword-container">
        {Array.isArray(words) &&
          words.map((word) => {
            return (
              <div className="keyword" key={word}>
                {word}
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

export default KeywordItems;
