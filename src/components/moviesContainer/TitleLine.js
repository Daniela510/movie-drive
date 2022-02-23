import React from "react";
import { useSelector } from "react-redux";
import LineGaps from "./LineGaps";

const TitleLine = ({ movie }) => {
  
  const theme = useSelector(state => state.themeState)
  const baseNameLine = "List__movie__line span--"
  const classNameLine = baseNameLine.concat(theme.theme)
  return (
    <p className={classNameLine}>
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
