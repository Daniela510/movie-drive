import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestsClose } from "../../redux";

const Requests = () => {
  const dispatch = useDispatch()
  const requests = useSelector(state => state.aboutState.requests)
  return (
      <>
      {requests ? <form className="requests requests--active">
          <h2 className="requests__child--title"> <span className="question"> Know a really good movie we should all watch? </span> 
          <span className="close-about" onClick={()=>dispatch(requestsClose())}>x</span></h2>
      <label className="requests__child "> Your name: <br/>
        <input type="text" />
      </label>
      <label className="requests__child">Email: <br/>
        <input type="email" />
      </label>
      <label className="requests__child">Recommend a title or just say hi! :)
        <textarea type="text" />
      </label>
      <input type="submit" value="Submit" className="requests__child submit" />
    </form> : <form className="requests requests--hidden"></form> }
    
    </>
  );
};

export default Requests;