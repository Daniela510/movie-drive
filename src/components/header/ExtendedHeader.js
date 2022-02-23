import React from "react";
import { makeClassic, makeInverse, makeGold, menuClose, aboutOpen, requestsOpen, aboutClose, requestsClose } from "../../redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ExtendedHeader = ({
  menuState,
  menuClose,
  filterMovies,
  allMovies,
  makeClassic,
  makeGold,
  makeInverse,
  cartBoolean,
  aboutOpen,
  requestsOpen,
  aboutClose,
  requestsClose
}) => {
  return (
    <>
      {menuState ? (
        <div
          className="extension extension--active"
          onMouseLeave={menuClose}
        >
          <ul className="extension__child">
            <li onClick={() => {aboutOpen(); requestsClose()}}>About us</li>
            <li onClick={() => {requestsOpen(); aboutClose()} }>Request a movie</li>
            <li><Link to='/cart'>See your cart</Link></li>
          </ul>
          {cartBoolean ? (
            <ul className="extension__child">
            <li> <Link to='/'>Movies</Link></li>
            </ul>
          ) : (
            <ul className="extension__child">
              <li onClick={allMovies}>All Movies</li>
              <li onClick={() => filterMovies("Rom-Com Monday")}>
                Rom-Com Monday
              </li>
              <li onClick={() => filterMovies("Docu Wednesday")}>
                Docu Wednesday
              </li>
              <li onClick={() => filterMovies("Horror Thursday")}>
                Horror Thursday
              </li>
            </ul>
          )}
          <ul className="extension__child">
            <li onClick={makeClassic}>Classic</li>
            <li onClick={makeInverse}>Inverted Film</li>
            <li onClick={makeGold}>Gold</li>
          </ul>
        </div>
      ) : (
        <div className="extension extension--hidden" />
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    menuState: state.menuState.display,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    menuClose: () => dispatch(menuClose()),
    makeClassic: () => dispatch(makeClassic()),
    makeGold: () => dispatch(makeGold()),
    makeInverse: () => dispatch(makeInverse()),
    aboutOpen: () => dispatch(aboutOpen()),
    requestsOpen: () => dispatch(requestsOpen()),
    aboutClose: () => dispatch(aboutClose()),
    requestsClose: () => dispatch(requestsClose())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExtendedHeader);
