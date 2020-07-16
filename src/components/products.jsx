import React from 'react'
import Container from 'react-bootstrap/Container'
import '../products.css'

export default ({P}) =>{
let porcentaje=()=>{
    return(
        Math.round(((P.price.sellingPrice *100)/ P.price.listPrice)-100)
    )
}

    return(
        <Container style={{display:"flex", flexWrap:"wrap", width:"210px", marginBlockEnd:"55px"}} >
        {(P.price.listPrice === P.price.sellingPrice) ?
        (
                <Container className="producto" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <a href={P.href}>
                        <img className="page-1" variant="top" src={`./img/${P.image}`} alt={P.href}/>
                    <Container style={{display:"flex", justifyContent:"center", margin:"0%", padding:"0%"}}>
                        <p className="cebolla-allium-cepa" >{P.title}</p> 
                    </Container>           
                    <Container className="descuento" style={{display:"flex", justifyContent:"center", marginTop:"25px"}}>
                        <p className="descuento-num">${P.price.sellingPrice}</p>            
                    </Container>     
                    </a>     
                </Container>
        ):(
                <Container className="producto" >
                    <a href={P.href}>
                        <Container className="oval-2" style={{display:"flex", alignItems: "flex-end", justifyContent: "center", margin:"0%"}}>
                        <p className="porcentaje" >{porcentaje()}%</p>
                        </Container>
                    <img className="page-1" variant="top" src={`./img/${P.image}`} alt={P.href}/>
                        <Container style={{display:"flex", justifyContent:"center", margin:"0%", padding:"0%"}}>
                            <p className="cebolla-allium-cepa" >{P.title}</p> 
                        </Container>
                        <Container className="tachado" style={{display:"flex", justifyContent:"center", textDecoration:"line-through"}} >
                            <p className="regular n7-49" >${P.price.listPrice}</p>  
                        </Container>           
                        <Container className="descuento" style={{display:"flex", justifyContent:"center"}}>
                            <p className="descuento-num">${P.price.sellingPrice}</p>            
                        </Container>
                        </a>          
                </Container>
        )}
        </Container>
    )
}