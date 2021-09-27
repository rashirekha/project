import React from 'react'
import Navigation from './Navigation'
import a from './design.module.css'
function Offer() {
    return (
        <div>
            <Navigation/>
           
                <h1 className={a.offerPara}>Sorry You Don't Have Offers Now</h1>
            
        </div>
    )
}

export default Offer
