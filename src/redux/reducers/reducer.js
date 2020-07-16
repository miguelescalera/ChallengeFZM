import {SEARCH_CATEGORIES, SEARCH_PRODUCTS, SEARCH_SLIDES, SEARCH_FILTROS} from "../../constans"


const initialState={
    categories:[],
    products:[],
    filtros:[],
    slides:[]
}


export default (state= initialState, action)=>{
    switch(action.type){
        case SEARCH_CATEGORIES:
        return{
            ...state, categories: action.categories    
        }
        case SEARCH_PRODUCTS:
        return{
            ...state, products: action.products    
        }
        case SEARCH_FILTROS:
        return{
            ...state, filtros : action.filtros    
        }
        case SEARCH_SLIDES:
        return{
            ...state, slides: action.slides    
        }
    default:
            return state;
    }

}