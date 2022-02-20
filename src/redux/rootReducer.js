import { combineReducers } from "redux"
import movieReducer from "./movieList/movieReducers"
import menuReducer from "./menu/menuReducer"

const rootReducer = combineReducers({
    movieList: movieReducer,
    menuState: menuReducer
})

export default rootReducer