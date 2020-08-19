import React from "react";

export default function PictureCard(props) {
  return (
    <div>
      <div>{props.date}</div>
      <div>
        <img src={props.picture} alt="" />
      </div>{" "}
      <div>{props.title}</div>
      <div>{props.photographer}</div>
    </div>
  );
}
