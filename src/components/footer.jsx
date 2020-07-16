import React from 'react'
import Container from 'react-bootstrap/Container'
import '../footer.css'
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default () => {
    return(
        <Container className="rectangle-copy-4" style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
            <Container className="footer-links">
                <text className="productos">PRODUCTOS</text>
                <hr className="line-2"/>
                <Container className="compre-junto-kit-loo">
                <text>Compre junto</text>
                <text>Kit Lock</text>
                <text>Completa Tu Compra</text>
                <text>Shop de Look</text>
                <text>Sin Stock</text>
                </Container>
            </Container>

            <Container className="footer-links">
                <text className="productos">MI CUENTA</text>
                <hr className="line-2"/>
                <Container className="compre-junto-kit-loo">
                <text>Mis Pedidos</text>
                <text>Wishlist</text>
                <text>Productos Frecuentes</text>
                <text>Mis Listas</text>
                <text>Mis Recetas</text>
                </Container>
            </Container>

            <Container className="footer-links">
                <text className="productos">CONTACTANOS</text>
                <hr className="line-2"/>
                <Container className="compre-junto-kit-loo">
                <text>Nuestras Sucursales</text>
                <text>Horarios y Telefonos</text>
                </Container>
            </Container>

            <Container className="footer-links icons" >
                <FaFacebookF className="pagefooter-1" color="white"/>
                <FaTwitter className="pagefooter-1-1" color="white"/>
                <FaYoutube className="pagefooter-1-2" color="white"/>
            </Container>
            
        </Container>
    )
}