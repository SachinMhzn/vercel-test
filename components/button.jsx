import React from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={() => console.log("button clicked")}>Button</button>
    </div>
  );
};

export default Button;
