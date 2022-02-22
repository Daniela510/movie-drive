import SearchIcon from "../svgComponents/SearchIcon";
import Ticket from "../svgComponents/Ticket";
import { useSelector } from 'react-redux'

const LogoLine = ({ top, handleChange, keyword }) => {
  const theme = useSelector(state => state.themeState)
  const baseNameLine = "line line--"
  const classNameLine = baseNameLine.concat(theme.theme)
  const baseNameIcon = "searchIcon searchIcon--"
  const classNameIcon = baseNameIcon.concat(theme.theme)
  return (
    <p className={classNameLine}>
      {top ? (
        <>
        <SearchIcon className={classNameIcon}/>
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
