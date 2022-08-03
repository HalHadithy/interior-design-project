import React from 'react'

function PurchaseItemCard({purchaseItem, cartArray, setCartArray}){


    function addItem(){
        //how can I add one item to the list of items in this array???
        setCartArray([...cartArray, purchaseItem ])
    }

    // {
    //     id: "",
    //     itemName:"",
    //     itemImage: "",
    //     itemCount: 0
    //   }

    return (
        <div>
            <p>{purchaseItem.source}</p>
            <img src={purchaseItem.url} alt="item to purchase"/>
            <button onClick={addItem}> Add To Cart </button>
        </div>    
    )
    
}

export default PurchaseItemCard