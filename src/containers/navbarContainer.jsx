import React from 'react' 
import Navbar from '../components/navbar'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import { fetchCategories } from '../redux/actions'
import Categories from '../components/categories'
import Container from 'react-bootstrap/Container'
import '../app.css'



class NavbarContainer extends React.Component{

componentDidMount(){
    this.props.fetchCategories()
}

    render(){
        const CategoriesData = this.props.state.categories.categories
        return( 
            !CategoriesData ?
            (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
            ):(
                <Container style={{display:"flex", justifyContent:"center", flexDirection:"row", flexWrap:"wrap", maxHeight: "146px", maxWidth:"1280px", padding:"0px"}}>
                <Container style={{display:"flex", flexDirection:"row", maxWidth:"1280px", padding:"0px", position:"fixed", zIndex:"100", backgroundColor:"white"}} >
                    <Navbar/>
                </Container>
                    {CategoriesData.map(C=>{
                        return(
                            <Container className="rectangle-copy-3" style={{display:"flex", flexDirection:"row", alignItems:"center", margin:"0px", padding:"0px", marginBlockStart:"90px"}}>
                                <Categories
                                    C={C}/>
                            </Container>
                        )
                    })}
                
                </Container>
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
        fetchCategories: () => dispatch(fetchCategories())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
  