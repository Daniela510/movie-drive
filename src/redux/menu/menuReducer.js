import { MENU_CLOSE, MENU_OPEN } from "./menuTypes";

const initialState = {
    display: false
}
const reducer = (state =  initialState, action) =>{
    switch (action.type) {
        case MENU_OPEN:
            return{
                display: true
            }
        case MENU_CLOSE:
            return{
                display: false
            }
        default: return state
    }
}

export default reducer