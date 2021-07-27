import React, { Fragment } from "react";
import CardItem from "./CardItem";

const CardList = ({ currentPosts, stripHTMLtag }) => {
  return (
    <Fragment>
      <div className="justify-content-space-between row g-0 row-cols-md-2">
        {currentPosts.map((data) => (
          <CardItem
            key={data.data[0].nasa_id}
            detailData={data}
            stripHTMLtag={stripHTMLtag}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default CardList;
