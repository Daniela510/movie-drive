import { ADD_CART, REMOVE_CART } from "./cartTypes";

const initialState = {
    cart: []
}
const reducer = (state =  initialState, action) =>{
    switch (action.type) {
        case ADD_CART:
            console.log(action.payload);
            return{
                cart: [...state.cart, action.payload]
            }
        case REMOVE_CART:
            return{
                cart: action.payload
            }
        default: return state
    }
}

export default reducer