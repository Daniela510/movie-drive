import {
    FETCH_MOVIE_FAIL,
    FETCH_MOVIE_REQ,
    FETCH_MOVIE_SUC
} from './movieTypes'


const initialState = {
    loading: false,
    movies: [],
    error: ''
}

const reducer = (state =  initialState, action) =>{
    switch (action.type) {
        case FETCH_MOVIE_REQ:
            return{
                ...state,
                    loading: true,
            }
        case FETCH_MOVIE_SUC:
            return{
                loading: false,
                movies: action.payload,
                error:''
            }
        case FETCH_MOVIE_FAIL:
            return{
                loading: false,
                movies:[],
                error: action.payload
            }
    
        default: return state
    }
}

export default reducer