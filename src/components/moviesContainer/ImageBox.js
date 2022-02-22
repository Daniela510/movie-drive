import React from "react";
import { useSelector } from "react-redux";

const ImageBox = ({ movie }) => {
  let height = window.innerHeight - 220;
  const theme = useSelector(state => state.themeState)
  const baseNameImg = "List__movie__box__img List__movie__box__img--"
  const classNameImg = baseNameImg.concat(theme.theme)
  const baseNameDesc = "List__movie__box__description List__movie__box__description--"
  const classNameDescription = baseNameDesc.concat(theme.theme)

  return (
    <div className="List__movie__box">
      <img
        className={classNameImg}
        src={movie.img}
        alt="No image found"
        height={height}
      />
      <div className={classNameDescription}>
        <p className="title">
          {movie.title} ({movie.year})
        </p>
        <p>Genre: {movie.genre}</p>
        <p>Director: {movie.director}</p>
        <p>Starring: {movie.stars}</p>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default ImageBox;
