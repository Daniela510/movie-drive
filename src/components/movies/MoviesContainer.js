import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../redux";
import DateLine from "./DateLine";
import ImageBox from "./ImageBox";
import LogoLine from "./LogoLine";
import TitleLine from "./TitleLine";

const MoviesContainer = ({ movieList, fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  }, []);
  return movieList.loading ? (
    <h2>Loading...</h2>
  ) : movieList.error ? (
    <h2>{movieList.error}</h2>
  ) : (
    <>
      <LogoLine top={true} />
      <div className="List">
        {movieList &&
          movieList.movies &&
          movieList.movies.map((movie) => (
            <div key={movie.id} className="List__movie">
              <TitleLine movie={movie} />
              <ImageBox movie={movie} />
              <DateLine movie={movie} />
            </div>
          ))}
      </div>
      <LogoLine top={false} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
