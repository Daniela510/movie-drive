import Ticket from "../svgComponents/Ticket";

const LogoLine = ({ top }) => {
  return (
    <p className="line">
      {" "}
      {window.innerWidth > 1100 ? (
        <>
          <span>.</span>
          <span>.</span> 
          <span>.</span>
        </>
      ) : (
        <>
          <span>.</span> 
          <span>.</span>
        </>
      )}
      <span className="asterix">Ice Drive-in Cinema</span>
      {window.innerWidth > 1100 ? (
        <>
          <span>.</span> 
          <span>.</span> 
          <span>.</span>
          <span>.</span> 
          <span>.</span>
        </>
      ) : (
        <>
          <span>.</span>
          <span>.</span>
          <span>.</span> 
          <span>.</span>
        </>
      )}
      <span className="asterix">Ice Drive-in Cinema</span>
      {window.innerWidth > 1100 ? (
        <>
          <span>.</span> 
          <span>.</span> 
          <span>.</span>
          <span>.</span> 
          <span>.</span>
        </>
      ) : (
        <>
          <span>.</span>
          <span>.</span>
          <span>.</span> 
          <span>.</span>
        </>
      )}
      <span className="asterix">Ice Drive-in Cinema</span>
      {window.innerWidth > 1100 ? (
        <>
          <span>.</span>
          <span>.</span> 
          <span>.</span>
        </>
      ) : (
        <>
          <span>.</span> 
          <span>.</span>
        </>
      )}
      {top ? <Ticket /> : <span>.</span>}
    </p>
  );
};

export default LogoLine;
