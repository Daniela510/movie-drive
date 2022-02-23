import { ADD_CART, REMOVE_CART } from "./cartTypes";

const initialState = {
  cart: [
    {
      id: 4,
      title: "Get Out",
      year: "2017",
      genre: "Horror, Thriller",
      day: "Horror Thursday",
      date: "23 June 2022",
      time: "22:30",
      director:
        "Jordan Peele, Allison Williams, LaKeith Stanfield, Bradley Whitford",
      stars: "Daniel Kaluuya",
      description:
        "Chris, an African-American man, decides to visit his white girlfriend's parents during a weekend getaway. Although they seem normal at first, he is not prepared to experience the horrors ahead.",
      img: "/images/get-out.jpg",
      iterations: 1,
    },
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      let newCart = [...state.cart];
      let alreadyInCart = false;
      newCart.forEach((item) => {
        if (item.id === action.payload.id) {
          alreadyInCart = true;
          item.iterations += 1;
        }
      });
      if (!alreadyInCart) {
          newCart.push({...action.payload, iterations: 1})
      }
      return {
        cart: newCart,
      };
    case REMOVE_CART:
        //This would remove all of the same movie
      let newCart3 = state.cart.filter((item) => action.payload.id !== item.id);
        //this decreases the number
      let newCart2 =[...state.cart];
      newCart2.forEach((item, index) => {
        if (item.id === action.payload.id) {
          if (item.iterations > 1) {
            item.iterations -= 1;
          } else {
            newCart2.splice(index, 1);
          }
        }
      })
      return {
        cart: newCart2,
      };
    default:
      return state;
  }
};

export default reducer;
