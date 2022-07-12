import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'

function Head (cartArray, setCartArray){

    const cartLogo = <img id='shopping-cart-logo' alt='cart photo here' src= '../data/basket-01_generated.png' />
    const cartCountArray = (cartArray.filter(()=>cartArray.itemCount)) //state of count
    console.log(cartCountArray)
    
    const [cartCount, setCartCount] = useState(0)

    for(let i=0; i<cartCountArray.length; i++){
        const newCartCount = cartCount + cartCountArray[i];
        setCartCount(newCartCount)
    }
    console.log(cartCount)

    return (
        <div> 
            <NavBar cartCount={cartCount} />
            <h1>WEBSITE NAME NOT SURE YET WHAT IT IS...</h1>
            <h3>short description of website here</h3>
        </div>
        
    )
    
}

export default Head

// let's do a cart logo that tells us what the number of items in the cart is