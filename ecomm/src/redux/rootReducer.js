import { combineReducers } from "redux";
import {productlist} from './producreducer'
import cart from './reducer'
export default  combineReducers({
    cart , productlist
})

