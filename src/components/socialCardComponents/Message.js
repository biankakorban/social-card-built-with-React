import React from "react";

const message = (props) => {
  return (
    <div className="message">
      <p>{props.desc}</p>
      <p style={{ fontWeight: "600" }}>{props.desc_cd}</p>
      <a href={props.link} style={{ textDecoration: "none", color: "grey" }}>
        biankakorban
      </a>
    </div>
  );
};

export default message;
