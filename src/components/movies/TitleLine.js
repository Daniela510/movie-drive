import React from "react";
import LineGaps from "./LineGaps";

const TitleLine = ({ movie }) => {
  return (
    <p className="List__movie__line">
      <span />
      <span className="title"> {movie.title} </span>
      {movie.title.length + movie.day.length > 35 ? (
        <>
          <span>{movie.year}</span> 
        </>
      ) : (
        <>
          <span>{movie.year}</span> <span /> 
        </>
      )}
     <LineGaps bottom={false}/> <span>{movie.day}</span> <span />
    </p>
  );
};

export default TitleLine;
