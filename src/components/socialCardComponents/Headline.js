import React from "react";

const headline = (props) => {
  return (
    <div className="headline">
      <div
        style={{
          display: "inline-block",
          width: "100%",
          padding: "5px",
        }}
      >
        <img
          src={props.img}
          alt="imageOfSydney"
          style={{ width: "50px", float: "left" }}
        />
      </div>
      <div style={{ padding: "5px", margin: "5px" }}>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default headline;
