import SearchIcon from "../svgComponents/SearchIcon";
import Ticket from "../svgComponents/Ticket";

const LogoLine = ({ top, handleChange, keyword }) => {
  return (
    <p className="line">
      {top ? (
        <>
        <SearchIcon />
          <input type="text" value={keyword} onChange={handleChange} />
        </>
      ) : (
        <span>.</span>
      )}{" "}
      {window.innerWidth > 1100 ? (
        <>
          <span>.</span>
        </>
      ) : (
        <></>
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
