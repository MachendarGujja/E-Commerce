export const mainReducer = (state,action) =>{
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state,cart:[...state.cart,{...action.payload,qty:1}]}
        case 'REMOVE_FROM_CART':
            return {...state,cart:state.cart.filter((e)=>e.id !== action.payload.id)}
        case 'ADD_TO_FAV':
            return {...state,fav:[...state.fav,action.payload]}
        case 'REMOVE_FROM_FAV':
            return {...state,fav:state.fav.filter((e)=>e.id !== action.payload.id)}
        case 'SEARCH':
            return {...state,search:action.payload}
        case 'CLEAR_SEARCH':
            return {...state,search:''}
        case 'BTN':
            return {...state,button:action.payload}
        case 'CHANGE':
             return {...state,button:false}
         default:
            return state;
    }
}
export const filterReducer = (state,action)=>{
    switch (action.type) {
        case 'PRICE':
            return {...state,price:action.payload}
        case 'FAST':
        return {...state,fastDel:!state.fastDel}
        case 'STOCK':
        return {...state,byStock:!state.byStock}
    
        default:
            return state;
    }
}