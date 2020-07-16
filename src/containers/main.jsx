import React from 'react'
import {connect} from "react-redux"
import NavbarContainer from './navbarContainer'
import {Route, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import HomeContainer from './homeContainer'
import FooterContainer from './footerContainer'

class Main extends React.Component{

    render(){
        return(
            <Container style={{maxWidth:"100%", maxHeight:"100%"}}>
                <NavbarContainer/>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                </Switch>
                <FooterContainer/>
            </Container>
        )
    }
}
export default connect(null, null)(Main)