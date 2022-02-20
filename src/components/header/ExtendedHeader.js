import React from "react";
import { menuClose } from "../../redux";
import { connect } from "react-redux";

const ExtendedHeader = ({ menuState, menuClose, handleChange }) => {
  return (
    <>
      {menuState ? (
        <div className="extension extension--active"  onMouseLeave={()=>menuClose()}>
          <input
            className="extension__child"
            type="text"
            defaultValue="Search by title"
            onChange={()=>handleChange()}
          />

          <ul className="extension__child">
            <li>Rom-Com Monday</li>
            <li>Docu Wednesday</li>
            <li>Horror Thrusday</li>
          </ul>
          <div className="style-prop" >Style prop</div>
          <div className="style-prop" >Style prop</div>
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
