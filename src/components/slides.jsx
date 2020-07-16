import React from 'react'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import '../slides.css'
import Spinner from 'react-bootstrap/Spinner'

export default ({S}) => {
    return(
        <>
        {!S? 
            (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ):(
            <Container style={{display:"flex", justifyContent:"center", padding:"0px" }}>
                <Carousel className="group-8 rectangle-3" style={{display:"flex", justifyContent:"center"}} > 
                    {S.map(SL=>{
                        return(
                            <Carousel.Item>
                                <a href={SL.href} ><img style={{marginLeft:"-300px"}} src={`./img/${SL.imgName}`}  /></a>
                            </Carousel.Item>
                        )
                    })}
                    
                </Carousel>
            </Container>
            )}
            </>
    )
}



{/* <Carousel.Item>
                        <a href={S[0].href} ><img style={{marginLeft:"-300px"}} src={`./img/${S[0].imgName}`}  /></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href={S[1].href} ><img  src={`./img/${S[1].imgName}`}/></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href={S[2].href} ><img  src={`./img/${S[2].imgName}`}/></a>
</Carousel.Item> */}