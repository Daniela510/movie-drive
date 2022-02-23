import SearchIcon from "../svgComponents/SearchIcon";
import Ticket from "../svgComponents/Ticket";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const LogoLine = ({ top, handleChange, keyword }) => {
  const theme = useSelector((state) => state.themeState.theme);
  const cart = useSelector((state) => state.cartState.cart);
  const [ticketClassName, setTicketClassName] = useState('circle--passive')
  const baseNameLine = "line line--";
  const classNameLine = baseNameLine.concat(theme);
  const baseNameIcon = "searchIcon searchIcon--";
  const classNameIcon = baseNameIcon.concat(theme);
  useEffect(() => {
    if (cart.length > 0) {
      console.log(cart);
      setTicketClassName('circle--active')
    } else {
      console.log("cart is empty");
      setTicketClassName('circle--passive')
    }
  }, [cart]);

  return (
    <p className={classNameLine}>
      {top ? (
        <>
          <SearchIcon className={classNameIcon} />
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
      {top ?  <Link to="/cart"><Ticket classname={ticketClassName} /></Link> : <span>.</span>}
    </p>
  );
};

export default LogoLine;
