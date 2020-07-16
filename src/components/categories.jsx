import React from 'react'
import {Link} from 'react-router-dom'
import '../app.css'

export default({C})=>{
    return(
                <Link to={C.href} className="categoria-nro-1">{C.title}</Link> 
    )
}