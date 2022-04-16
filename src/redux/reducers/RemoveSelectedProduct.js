import { actionTypes } from "../actions/ActionTypes";

const RemoveSelectedProduct = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SELECTED_PRODUCTS:
            return {
                ...state,
                ...action.payload
            } 
            case actionTypes.SELECTED_PRODUCTS:
            return {}    
        default:
            return state;
    }
}

export default RemoveSelectedProduct;