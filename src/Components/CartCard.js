import React from 'react'

function CartCard (item, removeItem, addItem){


    return (
        <div>
            <img src={item.image} alt="item"/>
            <h3>{item.name}</h3>
            {/*link this item to the origional list of stuff</> */}
            <button onClick={()=>addItem(item)}>+</button>
            <p>Put something here to display number in cart</p>
            <button onClick={()=>removeItem(item)}>-</button>
            <img src="../data/trash.png" title="delete item" alt="trash"></img>
        </div>

    )
    
}

export default CartCard