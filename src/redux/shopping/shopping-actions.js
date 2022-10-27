import * as actionTypes from './shopping-types';

export const addToCart =(itemId, qtyf)=>{
    return{
        type: actionTypes.ADD_TO_CART,
        payload:{
            id: itemId,
            qty: qtyf,
        }
    }
}

export const removeFromCart = (itemId)=>{
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload:{
            id: itemId,
        }
    }
}

export const adjustQty = (itemId,  value)=>{
    return{
        type: actionTypes.ADJUST_QTY,
        payload:{
            id: itemId,
            qty: value,
        }
    }
}

export const setCurrentItem = (item)=>{
    return{
        type: actionTypes.SET_CURRENT_ITEM,
        payload : item,
    }
}

export const calculateCartr = ()=>{
    return{
        type: actionTypes.CALCULATE_CART,
        payload:{}
    }
}