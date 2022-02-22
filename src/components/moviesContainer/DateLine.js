import React from "react";
import LineGaps from "./LineGaps";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux";

const DateLine = ({ movie }) => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.themeState)
  const baseNameLine = "List__movie__line span--"
  const baseNameButton = "purchase purchase--"
  const classNameLine = baseNameLine.concat(theme.theme)
  const classNameButton = baseNameButton.concat(theme.theme)
  return (
    <p className={classNameLine}>
      <span /> <span>{movie.date}</span>
      <span /> <span>{movie.time}</span> 
      <LineGaps bottom={true}/>
      <span className={classNameButton} onClick={()=>dispatch(addItem(movie))}> Buy Tickets </span>   
      <span />{" "}
    </p>
  );
};

export default DateLine;
