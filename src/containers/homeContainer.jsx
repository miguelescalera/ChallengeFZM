import React from 'react'
import Slides from '../components/slides'
import Filters from '../components/filtros'
import Products from '../components/products'
import { connect } from 'react-redux'
import { fetchProducts, SearchProducts } from '../redux/actions'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import '../products.css'
import '../filtros.css'


class HomeContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            marca: false,
            categoria: false
        }
        this.brand=this.brand.bind(this)
        this.categories=this.categories.bind(this)
    }

componentDidMount(){
    this.props.fetchProducts()
}

brand(name){
    if(!this.state.marca){
        console.log("parametro", name)
        let filtros=  this.props.state.products.filter(P=>{
            return P.attributes[0].value === name
        })
        
        this.props.filtrosProducts(filtros)
       this.setState({marca: true})
    }else{
        this.props.fetchProducts()
        this.setState({marca:false})
    }
}

categories(name){
    if(!this.state.categoria){
        console.log("parametro", name)
        let categoria=  this.props.state.products.filter(P=>{
            return P.attributes[1].value === name
        })
        
        this.props.filtrosProducts(categoria)
       this.setState({categoria: true})
    }else{
        this.props.fetchProducts()
        this.setState({categoria:false})
    }
}


    render(){
        const SlidesData= this.props.state.slides
        const ProductsData= this.props.state.products
        const FiltersData= this.props.state.filtros        
        return(
            !ProductsData && !SlidesData && !FiltersData ?
            (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>   
            ):(
                <>
                        <Slides
                        S={SlidesData}/>
                    <Container style={{display:"flex", maxWidth:"1280px", padding:"0px"}}>
                            <hr className="line-3"/>
                            <text className="productos-title">Products</text>
                            <hr className="line-3-copy"/>
                    </Container>
                    <Container style={{display:"flex", maxWidth:"1280px", paddingLeft:"0px", paddingRight:"0px", marginBlockStart:"3%"}}>
                        <Container className="filtros">
                            {FiltersData.map(F=>{
                                return(
                                        <Filters
                                            F={F}
                                            brand={this.brand}
                                            categories={this.categories}/>
                                )
                            })}
                        </Container>
                        <Container style={{display:"flex", flexWrap:"wrap"}}>
                            {ProductsData.map(P=>{
                                return(
                                    <Products
                                        P={P}/>
                                )
                            })}
                        </Container>
                    </Container>
                </>
            )
            
        )
    }
}
const mapStateToProps = function(state){
    return{
        state
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        filtrosProducts: (name) => dispatch(SearchProducts(name))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)