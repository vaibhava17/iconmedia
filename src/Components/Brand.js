import React from "react";

const Brand = (props) => {
  return (
    <>
      <span style={{ left: "clear" }} className={props.class}>
        <img
          className="brand-img"
          src={props.src}
          alt=""
          width="150px"
          height="80px"
        />
      </span>
    </>
  );
};

export default Brand;
