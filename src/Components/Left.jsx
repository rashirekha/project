import React from 'react'
import a from './design.module.css'

function Left({input}) {
    return (
        <div>
        <div className={a.image1}>
            <img src="printShop.jpg" alt="Printing Shop Image"></img>
        </div>
        <div className={a.right}>

            <h2>{input}</h2><br/>


            <p>Our designers are ready to help 
                you with your creative needs. Feel free to drop in to our studio during 
                working hours and speak to one of our representatives.
                </p>
                <br/>
                <div className={a.list}>
                
                    <p>BOOKLETS<br/>
                    BROCHURES<br/>
                    BUSINESS CARDS<br/>
                    BUSINESS FORMS<br/>
                    COLOR COPIES<br/>
                    DIRECT MAIL PRINTING<br/>
                    ENVELOPES</p>
                
                </div>
                </div>
                
        </div>
    )
}

export default Left
