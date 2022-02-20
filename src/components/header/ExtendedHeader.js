import React from "react";
import { menuClose } from "../../redux";
import { connect } from "react-redux";

const ExtendedHeader = ({ menuState, menuClose, handleChange }) => {
    // onMouseLeave={()=>menuClose()}
    return (
    <>
      {menuState ? (
        <div className="extension extension--active"  onMouseLeave={()=>menuClose()}>
            <ul className="extension__child">
            <li>About us</li>
            <li>Request a movie</li>
          </ul>
          <ul className="extension__child">
            <li>Rom-Com Monday</li>
            <li>Docu Wednesday</li>
            <li>Horror Thrusday</li>
          </ul>
          <ul className="extension__child">
            <li>Classic</li>
            <li>Inverted Film</li>
            <li>Pink</li>
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
    handleChange: () => dispatch(menuClose()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExtendedHeader);
