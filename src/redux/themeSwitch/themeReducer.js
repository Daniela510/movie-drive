import { THEME_CLASSIC, THEME_INVERT, THEME_GOLD } from "./themeTypes";

const initialState = {
    theme: "classic"
}
const reducer = (state =  initialState, action) =>{
    switch (action.type) {
        case THEME_CLASSIC:
            return{
                theme:"classic"
            }
        case THEME_INVERT:
            return{
                theme:"inverse"
            }
            case THEME_GOLD:
            return{
                theme:"gold"
            }
        default: return state
    }
}

export default reducer