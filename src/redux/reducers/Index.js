import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import SelectedProducts from "./SelectedProducts";
import RemoveSelectedProduct from './RemoveSelectedProduct'
import AddToCart from "./AddToCart";
import testingReducer from "./testingReducer";

const RootReducer = combineReducers({
    ProductReducer,
    SelectedProducts,
    RemoveSelectedProduct,
    AddToCart,
    testingReducer
})

export default RootReducer;