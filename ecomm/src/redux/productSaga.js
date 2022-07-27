import {takeEvery , put} from 'redux-saga/effects'
import {JEWELERYS, PRODUCT, SET_PRODUCT,  WOMENS , ELECTRONICS , MENS} from './constant'

function* setProduct (){
    let url =`https://fakestoreapi.com/products`
    let response = yield fetch(url)
    let data = yield response.json()
   
    yield put({type: SET_PRODUCT , payload:data})
   
   
 }
 function* setWomens (){
    let url =`https://fakestoreapi.com/products`
    let response = yield fetch(url)
    let data = yield response.json()
    let result = data.filter((item )=> item.category === "women's clothing")
    

   
    yield put({type: SET_PRODUCT , payload:result})
   
   
 }
 function* setMens (){
    let url =`https://fakestoreapi.com/products`
    let response = yield fetch(url)
    let data = yield response.json()
    let result = data.filter((item )=> item.category === "men's clothing")
    

   
    yield put({type: SET_PRODUCT , payload:result})
   
   
 }
 function* setElectronics (){
    let url =`https://fakestoreapi.com/products`
    let response = yield fetch(url)
    let data = yield response.json()
    let result = data.filter((item )=> item.category === "electronics")
    

   
    yield put({type: SET_PRODUCT , payload:result})
   
   
 }
 function* setjweelery (){
    let url =`https://fakestoreapi.com/products`
    let response = yield fetch(url)
    let data = yield response.json()
    let result = data.filter((item )=> item.category ===  "jewelery")
    

   
    yield put({type: SET_PRODUCT , payload:result})
   
   
 }
 
function* product ()
{
    yield takeEvery(PRODUCT , setProduct )
    yield takeEvery(WOMENS , setWomens )
    yield takeEvery(MENS , setMens )
    yield takeEvery(ELECTRONICS , setElectronics )
    yield takeEvery(JEWELERYS , setjweelery )
}
export default product