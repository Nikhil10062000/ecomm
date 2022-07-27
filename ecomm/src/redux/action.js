import {ADD_TO_CART , REMOVECART} from './constant'
import { REMOVE } from './constant'
import {CLEAR } from './constant'
export const addToCart =(data)=>{
    
    return {
        type :ADD_TO_CART ,
        payload:data
    }
}
export const remove =(data)=>{
    return {
        type :REMOVE,
        payload:data
    }
}
export const clear =()=>{
    return {
        type :CLEAR
    }
}
export const removecart =(data)=>{
    return {
        type :REMOVECART ,
        payload:data
    }
}