import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'

function Head (){

    const cartLogo = <img id='shopping-cart-logo' alt='cart photo here' src= '../data/basket-01_generated.png' />
    const cartCount = 1 //state of count


    return (
        <div> 
            <NavBar/>
            <h1>WEBSITE NAME NOT SURE YET WHAT IT IS...</h1>
            <h3>short description of website here</h3>
        </div>
        
    )
    
}

export default Head

// let's do a cart logo that tells us what the number of items in the cart is