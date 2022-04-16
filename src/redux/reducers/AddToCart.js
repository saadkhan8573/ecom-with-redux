import { actionTypes } from "../actions/ActionTypes";

const initialstate = {
    products: []
}

const AddToCart = (state = initialstate, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:

            return {
                products: [
                    ...state.products,
                    action.payload
                ]
            }

            case "INCREMENT" :
                let updateCart = state.products.map((currElem) => {
                    if(currElem.id === action.payload){
                        return 
                    }
                }) 
            return{

            }

        default: return state;
    }
}

export default AddToCart;