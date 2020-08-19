import React from "react";

import "./index.css";

export default function PictureCard(props) {
  return (
    <div className="image-container">
      <div>{props.date}</div>
      <img src={props.picture} alt="" />

      <div className="footer">
        <div className="text-box-1">{props.title}</div>
        <div className="text-box-2">{props.photographer}</div>
      </div>
    </div>
  );
}
