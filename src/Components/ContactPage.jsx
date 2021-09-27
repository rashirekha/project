import React from 'react'
import Navigation from './Navigation'
import a from './design.module.css'
function ContactPage() {
    const[n,fun]=React.useState("Type Your Contact number in the text field, We will Contact You Soon");
    return (
        <div>
           <Navigation/>
           <div className={a.state}>
           <input type="text" className={a.text}>
               </input>
               <button className={a.button}onClick={function(){
               fun(alert(n));
           }}>Click me to check</button>
           </div>
           <div className={a.details}>
               <p>Address :	No. 466, Union Place, Colombo 2, Sri Lnaka<br/><br/>
               Tel : +94 112 672 080<br/><br/>
               Fax  : +94 267 20 92-93<br/><br/>
               Opening Time : We are Open 365 Days<br/><br/>
               Email : printshop@gmail.com</p>
           </div>
        </div>
    )
}

export default ContactPage
