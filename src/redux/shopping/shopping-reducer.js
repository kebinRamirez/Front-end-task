import * as actionTypes from './shopping-types';
import List from '../../assets/list';

const INITIAL_STATE = {
    products: List, //{id, title, desc, price, img}
    cart: [],//{id, title, desc, price, img, qty}
    currentItem: null,
    calculateCart: 0
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //get the items data from the products array
            const item = state.products.find(prod => prod.id === action.payload.id);
            //check if item is in cart alredy
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);
            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + action.payload.qty } : item) : [...state.cart, { ...item, qty: action.payload.qty }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
            };
        case actionTypes.ADJUST_QTY:
            return {};
        case actionTypes.SET_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        case actionTypes.CALCULATE_CART:
            //initializing variable sum
            var sum = 0
            //calculating the real amount to pay
            state.cart.map((item) => {
                sum = sum + item.qty * item.price
            })
            return {
                ...state,
                calculateCart: sum
            }
        default:
            return state;
    }
};

export default shopReducer;