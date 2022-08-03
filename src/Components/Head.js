import React, {useState} from 'react'
import NavBar from './NavBar'

function Head ({cartArray}){

    const [cartCount, setCartCount] = useState(0)
    const cartCountArray = (cartArray.map((cartItem)=>cartItem.itemCount)) //state of count

    

    for(let i=0; i<cartCountArray.length; i++){
        const newCartCount = cartCount + cartCountArray[i];
        setCartCount(newCartCount)
    }

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