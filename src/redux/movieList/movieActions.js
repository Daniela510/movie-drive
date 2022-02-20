import axios from 'axios'
import {
    FETCH_MOVIE_FAIL,
    FETCH_MOVIE_REQ,
    FETCH_MOVIE_SUC
} from './movieTypes'

export const fetchMovies = () =>{
    return (dispatch) => {
        dispatch(fetchRequest)
        axios.get('https://my-json-server.typicode.com/Daniela510/demo/list')
        .then(res =>{
            const movies = res.data
            dispatch(fetchSuccess(movies))
        })
        .catch(error => {
            const errorMessage = error.message
            dispatch(fetchFail(errorMessage))
        })
    }
}

export const fetchRequest = ()=>{
    return{
        type:  FETCH_MOVIE_REQ
    }
}
export const fetchSuccess = movies =>{
    return{
        type:  FETCH_MOVIE_SUC,
        payload: movies
    }
}
export const fetchFail = err =>{
    return{
        type:  FETCH_MOVIE_FAIL,
        payload: err
    }
}
