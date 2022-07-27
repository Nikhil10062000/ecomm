import {ADD_TO_CART, REMOVECART} from './constant'
import {REMOVE} from './constant'
import {CLEAR} from './constant'
 const cart =(state =[] , action)=>{
    switch(action.type){
    
        case ADD_TO_CART :
           let value = [...state ,action.payload]
           
            return [...value ]
            
          case REMOVE :
            
            const pop = state.filter((items , id)=> items.id !== action.payload)
            
           
            return [...pop]
        case CLEAR :
          return state = []
          case REMOVECART:
            const single = state.filter((item , id)=> item.id !== action.payload)
   
            return[...single]
            default :
           return state;
          
           
    }
    

}
export default cart