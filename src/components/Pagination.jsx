import React from "react";
import './pagination.css'
const Pagination = (props) => {
  return (
    <div className="page">
      {" "}
      {[...Array(props.length)].map((indiLen, idx) => (
        <span
          key={idx}
          style={{ backgroundColor: idx === props.index ? "black" : "" }}
          className="dot"
        ></span>
      ))}
    </div>
  );
};

export default Pagination;
