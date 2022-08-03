import React from 'react'
import CartCard from './CartCard'

function Cart ({cartArray, removeItem, addItem}){

// const cartObject = [
//     {  
//         id: "",
//         itemName:"",
//         itemImage: "",
//         itemCount: 0
//     }

// ]

//display each individual item in the cart:
const cartCardList = cartArray.map((item)=><CartCard item={item} removeItem={removeItem} addItem={addItem}/>)


    //dot map to display the cart cards

    return (
        <div>
            {cartCardList}
        </div>

    )
    
}

export default Cart