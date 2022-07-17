import {Link} from 'react-router-dom'
//an a tag would technically work but it wil reload the app but this mimics how an a tag works, but it won't 
//the entire app for us

function NavBar (cartCount){

    const cartLogo = <img id='shopping-cart-logo' alt='cart photo here' src= '../data/basket-01_generated.png' />

    return(
        <div id = "nav-bar-container">
            <div id = "nav-bar-info">
            <Link to="/">Home</Link>
            <Link to="/select-style">Select Your Style</Link>
            <Link to="/cart">
                {cartLogo}
                {cartCount}
            </Link>
            </div>
            
  
        </div>
    )
}

export default NavBar