import React from 'react'
import  './Info.css'
import poly1 from './poly-1.png'
import poly2 from './poly-2.png'

export const Info = (props)=>{
    const polyEle = props.polyPos==='left' ? <img src={poly1} alt="" className="poly-left" /> : <img src={poly2} alt="" className="poly-right" />
    
    return (

        <section className="info">
            {polyEle}
            <h1 className="title">THE RAMAERA EXPANSION</h1>
            <p className="description">We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain including IT.</p>
        </section>
    )
};
