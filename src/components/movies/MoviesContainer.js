import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../redux";
import DateLine from "./DateLine";
import ImageBox from "./ImageBox";
import LogoLine from "./LogoLine";
import TitleLine from "./TitleLine";

const MoviesContainer = ({ movieList, fetchMovies }) => {
  const [searchedData, setSearchedData] = useState([]);
  const [keyword, setKeyword] = useState("Search by title");

  useEffect(() => {
    fetchMovies();
  }, []);
  useEffect(() => {
    setSearchedData(movieList.movies);
  }, [movieList]);

  const handleChange = (evt) => {
  setKeyword(evt.target.value)
    let searchedData = movieList.movies.filter((movie) => {
      return (
        movie.title
          .toLowerCase()
          .search(evt.target.value.toLocaleLowerCase()) !== -1
      );
    });
    setSearchedData(searchedData);
  };

  return movieList.loading ? (
    <h2>Loading...</h2>
  ) : movieList.error ? (
    <h2>{movieList.error}</h2>
  ) : (
    <>
      {console.log({ movieList })}
      <LogoLine top={true} handleChange={handleChange} keyword={keyword} />
      <div className="List">
        {console.log("fuck me wtf ", { searchedData })}
        {movieList &&
          searchedData &&
          searchedData.map((movie) => (
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
