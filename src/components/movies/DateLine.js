import React from "react";
import LineGaps from "./LineGaps";

const DateLine = ({ movie }) => {
  return (
    <p className="List__movie__line">
      <span /> <span>{movie.date}</span>
      <span /> <span>{movie.time}</span> 
      <LineGaps bottom={true}/>
      <span className="purchase"> Buy Tickets </span>   
      <span />{" "}
    </p>
  );
};

export default DateLine;
