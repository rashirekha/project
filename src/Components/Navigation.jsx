import React from 'react'
import a from './design.module.css'
import {Link} from 'react-router-dom';


function Navigation() {
    return (
        <>
            <div className={a.navigationBar}>
            
            <div className={a.buttonContainer}>
                <Link to='/'>
                <button className={a.button}>HOME</button>
                </Link>

                <Link to='/offer'>
                <button className={a.button}>OFFERS</button>
                </Link>
                
                <Link to='/contact'>
                <button className={a.button}>CONTACT US</button>
                </Link>

                
            </div>
            <div className={a.text}>
                <h2>Best Customer Service</h2>
                </div>
            </div>
        </>
    )
}

export default Navigation
