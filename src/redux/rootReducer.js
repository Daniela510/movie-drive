import { combineReducers } from "redux"
import movieReducer from "./movieList/movieReducers"
import menuReducer from "./menu/menuReducer"
import themeReducer from "./themeSwitch/themeReducer"
import cartReducer from "./cart/cartReducer"
import aboutReducer from "./about/aboutReducers"

const rootReducer = combineReducers({
    movieList: movieReducer,
    menuState: menuReducer,
    themeState: themeReducer,
    cartState: cartReducer,
    aboutState: aboutReducer
})

export default rootReducer