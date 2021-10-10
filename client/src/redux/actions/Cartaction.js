import axios from "axios"
import * as actionType from '../constants/CartConstants'


const url = '';


export const addToCart =   (id) => async (dispatch) => {
    try {
        const { data } =  await axios.get(`${ url }/product/${ id }`)
        
        dispatch({type:actionType.ADD_TO_CART , payload:data})

    } catch (er) {
        console.log(er.message)
    }
}

export const removeFromCart = (id) => async (dispatch) => {
    dispatch({type:actionType.REMOVE_FROM_CART,payload:id})
}