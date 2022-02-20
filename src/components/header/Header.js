import React, { useEffect } from "react";
import { connect } from "react-redux";
import { menuOpen } from "../../redux";

const Header = ({ menuOpen}) => {
  let active = true;
  return (
    <header  onMouseEnter={()=>menuOpen()}>
      <ul className="nav">
        <li className="nav__item">Search</li>
        <li className="nav__item nav__item--active">Movies</li>
        <li className="nav__item">About Us</li>
        <li className="nav__item">Request</li>
      </ul>
    </header>
  );
};
const mapStateToProps = state => {
  return {
    menuState: state.menuState.display,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    menuOpen: () => dispatch(menuOpen()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);