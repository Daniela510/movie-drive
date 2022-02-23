import React, { useEffect } from "react";
import { connect } from "react-redux";
import { aboutOpen, menuOpen } from "../../redux";
import { Link } from "react-router-dom";

const Header = ({ menuOpen, aboutOpen}) => {
  return (
    <header onMouseEnter={()=>menuOpen()}>
      <ul className="nav">
      <li className="nav__item" onClick={aboutOpen}>About Us</li>
        <li className="nav__item nav__item--active"><Link to='/'>Movies</Link></li>
        <li className="nav__item">Theme</li>
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
    aboutOpen: () => dispatch(aboutOpen())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);