import React from "react";

const HeadingContent = (props) => {
  return (
    <>
      <h1 className={props.class}>{props.children}</h1>
    </>
  );
};

export default HeadingContent;
