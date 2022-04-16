import { actionTypes } from "../actions/ActionTypes";

const SelectedProducts = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SELECTED_PRODUCTS:
            return {
                ...state,
                ...action.payload
            }    
        default:
            return state;
    }
}

export default SelectedProducts;