import React from 'react'
import Container from 'react-bootstrap/Container'
import '../filtros.css'

export default({F, brand, categories})=>{


let Value= 
    (F.title === "Marca")?(
    (F.values).map((V, I)=>{return(
            <label>
                <input onClick={()=>brand(V)} id={I} className="combined-shape-copy-2" type="checkbox"/>
                <text for={I} className="item-filtro" style={{paddingLeft:"10px"}} >{V}</text>
            </label>
        )})
    ):(
    (F.values).map((V, I)=>{return(
        <label>
        <input  onClick={()=>categories(V)} className="combined-shape-copy-2" type="checkbox"/>
        <text className="item-filtro" style={{paddingLeft:"10px"}} >{V}</text>
        </label>
    )})
    )

    return(
        <Container  style={{display:"flex", flexDirection:"column", paddingBottom:"15px"}}>
            <h2 className="titulo-filtros-nro">{F.title}</h2>
            <hr className="line-3-copy-2"/>
    <text style={{display:"flex", flexDirection:"column"}}>{Value}</text>
        </Container>
    )
}
