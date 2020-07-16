import axios from "axios";
import { SEARCH_CATEGORIES, SEARCH_PRODUCTS, SEARCH_FILTROS, SEARCH_SLIDES} from "../../constans";

export const SearchCategories=(categories)=>(
  {
    type: SEARCH_CATEGORIES,
    categories
  }
)


export const SearchProducts=(products)=>(
  {
  type: SEARCH_PRODUCTS,
    products
  }
)
export const SearchFiltros=(filtros)=>(
  {
    type:SEARCH_FILTROS,
    filtros
  }
)
export const SearchSlides=(slides)=>(
  {
    type:SEARCH_SLIDES,
    slides
  }
)

export const fetchCategories= ()=>dispatch=>{
    axios.get('http://remote.fizzmod.com/menu.json')
    .then(res => res.data)
    .then(categories =>{
      dispatch(SearchCategories(categories.menu))
    })
  };

export const fetchProducts= ()=>dispatch=>{
  axios.get('http://remote.fizzmod.com/body.json')
  .then(res => res.data)
  .then(products =>{
    dispatch(SearchProducts(products.products))
    dispatch(SearchFiltros(products.filters))
    dispatch(SearchSlides(products.slides))
  })
}
