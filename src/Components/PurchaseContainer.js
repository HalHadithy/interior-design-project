import React, {useState} from "react";
import PurchaseItemCard from './PurchaseItemCard'

function PurchaseContainer ({roomsArray, cartArray, setCartArray, styleData}){
    const [purchaseCardArray, SetPurchaseCardArray] = useState([])

    const styleName = `${styleData.aesthetic} ${styleData.color}`
    console.log(styleName)

    
    //const roomObject = roomArray.filter(obj=> obj.name === styleData.aesthetic)
    //   SetPurchaseCardArray(roomObject.items)

    //   const putchaseCardList = purchaseCardArray.map((purchaseItem)=><PurchaseItemCard purchaseItem={purchaseItem} cartArray={cartArray} setCartArray={setCartArray}/> )


    return (
        <div>
            {/* {putchaseCardList} */}
        </div>
    )
    
}

export default PurchaseContainer