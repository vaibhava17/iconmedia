import React from "react";

const Buttons = ({ children}) => {

  return (
    <>
      <button className="btn quote-button btn-outline-warning">
        {children}
      </button>
      </>
  );
};

export default Buttons;
