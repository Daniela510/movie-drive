import React from "react";

const ImageBox = ({ movie }) => {
  let height = window.innerHeight - 220;
  return (
    <div className="List__movie__box">
      <img
        className="List__movie__box__img"
        src={movie.img}
        alt="No image found"
        height={height}
      />
      <div className="List__movie__box__description">
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
