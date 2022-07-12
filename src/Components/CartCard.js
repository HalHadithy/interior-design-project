import React, {useState, useEffect} from 'react'

function CartCard ({id, name, image, number}){


    return (
        <div>
            <img src={image}>Photo of item</img>
            <h3>{name}</h3>
            <>link this item to the origional list of stuff</>
            <p>Put something here to display number in cart</p>
            <img src="../data/trash.png" title="delete item"></img>
        </div>

    )
    
}

export default CartCard