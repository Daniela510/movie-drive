import React from "react";
import { menuClose } from "../../redux";
import { connect } from "react-redux";

const ExtendedHeader = ({ menuState, menuClose }) => {
  // onMouseLeave={()=>menuClose()}
  return (
    <>
      {menuState ? (
        <div className="extension extension--active"  onMouseLeave={()=>menuClose()}>
          <input
            className="extension__child"
            type="text"
            defaultValue="Search by title"
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExtendedHeader);
