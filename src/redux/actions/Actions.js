import { actionTypes } from "./ActionTypes"
export const setProducts = (product) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: product
    }
}

export const selectedProducts = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCTS,
        payload: product
    }
}

export const removeSelectedProducts = () => {
    return {
        type: actionTypes.SELECTED_PRODUCTS,
    }
}

export const addtocart = (product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: product
    }
}

export const removefromcart = (id) => {
    return {
        type: actionTypes.REMOVE_FORM_CART,
        payload: id
    }
}

export const increment = (id) => {
    return {
        type: "INCREMENT",
        payload : id
    }
}