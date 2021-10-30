import React from "react";

const HeadingParagraph = (props) => {
  return (
    <>
      <p className={props.class}>{props.children}</p>
    </>
  );
};

export default HeadingParagraph;
