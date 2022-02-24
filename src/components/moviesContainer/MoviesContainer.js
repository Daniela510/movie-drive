import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../redux";
import ExtendedHeader from "../header/ExtendedHeader";
import DateLine from "./DateLine";
import ImageBox from "./ImageBox";
import LogoLine from "./LogoLine";
import TitleLine from "./TitleLine";

const MoviesContainer = ({ movieList, fetchMovies, theme }) => {
  const [searchedData, setSearchedData] = useState([]);
  const [keyword, setKeyword] = useState("Search by title");
  const baseNameList = "List List--";
  const classNameList = baseNameList.concat(theme.theme);

  useEffect(() => {
    fetchMovies();
  }, []);
  useEffect(() => {
    setSearchedData(movieList.movies);
  }, [movieList]);

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
    let searchedData = movieList.movies.filter((movie) => {
      return (
        movie.title
          .toLowerCase()
          .search(evt.target.value.toLocaleLowerCase()) !== -1
      );
    });
    setSearchedData(searchedData);
  };
  const filterMovies = (clickedDay) => {
    console.log(clickedDay);
    let filteredData = movieList.movies.filter((movie) => {
      return (
        movie.day.toLowerCase().search(clickedDay.toLocaleLowerCase()) !== -1
      );
    });
    setSearchedData(filteredData);
  };
  const allMovies = () => {
    setSearchedData(movieList.movies);
  };

  return movieList.loading ? (
    <h2>Loading...</h2>
  ) : movieList.error ? (
    <h2>{movieList.error}</h2>
  ) : (
    <>
      <ExtendedHeader
        filterMovies={filterMovies}
        allMovies={allMovies}
        cartBoolean={false}
      />
      <LogoLine top={true} handleChange={handleChange} keyword={keyword} />
      <div className={classNameList}>
        {movieList &&
          searchedData &&
          searchedData.map((movie) => (
            <div key={movie.id} className="List__movie">
              <TitleLine movie={movie} filterMovies={filterMovies} />
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
    theme: state.themeState,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
