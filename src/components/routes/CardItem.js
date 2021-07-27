import React, { Fragment } from "react";
import Keywords from "./Keywords";
import "./Card.css";

const CardItem = ({ detailData, stripHTMLtag }) => {
  return (
    <Fragment>
      <div>
        <div className="card m-2">
          {detailData.links ? (
            <img
              className="card-img-top"
              src={detailData.links[0].href}
              alt="준비중..."
            />
          ) : (
            "No Image"
          )}
          <div className="card-body">
            <div className="card-title">
              {stripHTMLtag(detailData.data[0].title)}
            </div>
            <div>{detailData.data[0].date_created.slice(0, 10)}</div>
            <div
              className="card-text"
              title={stripHTMLtag(detailData.data[0].description)}
            >
              {stripHTMLtag(detailData.data[0].description)}
            </div>
            <Keywords keywords={detailData.data[0].keywords} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardItem;
