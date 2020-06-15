import React from "react";

const image = (props) => {
  return (
    <div className="image">
      <div
        style={{
          backgroundColor: "white",
          color: "aquamarine",
          fontWeight: "bold",
          float: "right",
          padding: "3px",
          width: "30%",
          height: "auto",
        }}
      >
        <span style={{ verticalAlign: "middle" }}>Bianka Korban</span>
        <img
          src={props.image}
          alt="profileImage"
          style={{
            width: "40px",
            height: "50px",
            float: "right",
          }}
        />
      </div>
    </div>
  );
};

export default image;
