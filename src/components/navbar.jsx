import React from 'react'
import Container from 'react-bootstrap/Container'
import '../app.css'
import { IoIosSearch, IoIosCart } from "react-icons/io"


export default ()=>{
        return(
            <>
                <Container className="rectangle" style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"0px 32px", margin:"0%"}}>
                <img className="iconos-logo-fizzmod" src={`./img/logo_fizzmod.svg`} alt="fizzmod-logo"/>
                </Container>
                <Container style={{display:"flex", flexWrap:"wrap", justifyContent:"flex-end", height:"0px"}}>
                    <Container style={{display:"flex", justifyContent:"flex-end", margin:"7px 0px 7px 0px", padding:"0px"}}>
                    <a className="ayuda" href="#">Ayuda</a>
                    <a className="mis-pedidos" href="#">Mis pedidos</a>
                    <a className="mi-cuenta" href="#">Mi cuenta</a>
                </Container>
                <hr style={{margin:"0px"}} className="line"/>
                <text style={{alignItems:"center", display:"flex", flex:"auto"}}>
                <IoIosSearch className="iconos-icn-search" />
                <input className="buscar-un-producto" style={{border:"0px"}} type="text"placeholder="Buscar un Producto..."/>  
                </text>
                <Container className="rectangle-2" style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"0%", margin:"0%"}}>
                    <Container className="group-cart" style={{margin:"0px", padding:"0px"}}>
                        <IoIosCart color="white" className="iconos-icn-cart" />
                        {" "}
                        <text className="mi-carrito">MI CARRITO</text>
                    </Container>
                </Container>
                </Container>   
            </>
        )
}
