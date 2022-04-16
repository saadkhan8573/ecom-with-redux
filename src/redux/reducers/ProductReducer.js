import { actionTypes } from "../actions/ActionTypes";
const initialstate = {
    products: []
}

const ProductReducer = (state = initialstate, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        default: return state;
    }
}
export default ProductReducer;