export const mainReducer = (state,action) =>{
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state,cart:[...state.cart,{...action.payload,qty:1}]}
        case 'REMOVE_FROM_CART':
            return {...state,cart:state.cart.filter((e)=>e.id !== action.payload.id)}
        case 'CHANGE_QTY':
            return {...state,cart:state.cart.filter((e)=>e.id === action.payload.id?(e.qty = action.payload.qty):e.qty)}
        case 'ADD_TO_FAV':
            return {...state,fav:[...state.fav,action.payload]}
        case 'REMOVE_FROM_FAV':
            return {...state,fav:state.fav.filter((e)=>e.id !== action.payload.id)}
        case 'SEARCH':
            return {...state,search:action.payload}
        case 'CLEAR_SEARCH':
            return {...state,search:''}
        case 'BTN':
            return {...state,button:!state.button}
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
        case 'FILTER_BY_RATING':
            return {...state,byRating:action.payload}
        case 'CLEAR_FILTER':
            return {
                price:'',
    fastDel:false,
    byStock:false,
    byRating:0,
            }
        default:
            return state;
    }
}