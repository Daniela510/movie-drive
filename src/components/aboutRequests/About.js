import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { aboutClose } from "../../redux";

const About = () => {
  const dispatch = useDispatch()
  const about = useSelector(state => state.aboutState.display)
  return (
      <>
      {about ? <div className="about about--active">
        <div className="about__child">
      <p className="about__child__title"> <span>Ice Drive-In Cinema</span>  <span className="close-about" onClick={()=>dispatch(aboutClose())}>x</span></p>
      <p>
        Established in 2016, we are movie enthusiasts, always looking for
        suggestions and thrills.{" "}
      </p>
      </div>
      <p className="about__child">
        Parking spots are on first come first sevre basis, so if you want to choose
        the best spot come early. There are 4 rows of parking 8 spots each, to
        ensure a good experience for everybody mini-vans, jeeps and other higher
        rise vehicles are restricted to the last 2 rows.
      </p>
      <p className="about__child">
        There is a 5 km/h speed limit on the premises. If you arrive after the
        movie starts we urge you to drive without headlights.
      </p>
      <p className="about__child">Find us at: Kranenburger Str., 47559 Kranenburg, Germany</p>
    </div> : <div className="about about--hidden"></div> }
    
    </>
  );
};

export default About;
