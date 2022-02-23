import React from 'react'
import { Link } from 'react-router-dom'
import ExtendedHeader from '../header/ExtendedHeader'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../../redux'

const Cart = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.themeState.theme)
  const cart = useSelector((state) => state.cartState.cart);
  const baseNameItem = 'cart__container__item cart__container__item--'
  const classNameItem = baseNameItem.concat(theme)
  const baseNameContainer = "cart__container cart__container--"
  const classNameContainer = baseNameContainer.concat(theme)
  const baseCartType = "cart__type cart__type--"
  const classNameCartType = baseCartType.concat(theme)
    return (
    <>
        <ExtendedHeader cartBoolean={true}/>
        <div className='cart'>
        <h2 className={classNameCartType}>Your selected tickets:</h2>
        {cart &&
         cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className={classNameContainer}>
              <h3 className={classNameItem}>{item.title}</h3>
              <p className={classNameItem}>{item.date}</p>
              <p className={classNameItem}>× {item.iterations}</p>
              <button className='cart__container__item remove' onClick={()=>{
                dispatch(removeItem(item))
              }}>Remove</button>
            </div>
          ))):( <div className={classNameCartType}>No tickets in the cart</div> )}
        <Link to='/'><button className='goHome'> Go to the movie list </button></Link>
        </div>
    </>
  )
}

export default Cart