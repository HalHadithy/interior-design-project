// import the style sheets
import "./App.css"
import "./style/cart-container.css"
import "./style/head-container.css"
import "./style/nav-bar.css"
import "./style/purchase-container.css"
import "./style/room-container.css"
import "./style/select-style-container.css"
// end import the style sheets



import { Routes, Route } from "react-router-dom"
import React, {useState, useEffect} from 'react'
import HomePage from "./Components/HomePage"
import PurchaseContainer from './Components/PurchaseContainter.js'
import RoomContainer from './Components/RoomContainer'
import SelectStyle from './Components/SelectStyle.js'
import Cart from './Components/Cart'
import FourOhFour from "./Components/FourOhFour"


function App (){
  const[cartArray, setCartArray]  = useState([
    {
      id: "",
      itemName:"",
      itemImage: "",
      itemCount: 0
    }
  ])

    return (        
        <div>
            <Routes >        
              {/* build so when we are in specific URS'l so we can got o  */}
              <Route path="/" element={
                <HomePage cartArray={cartArray} setCartArray ={setCartArray}/>
              }></Route>
              <Route path="/select-style" element={<SelectStyle />}></Route>
              <Route path="/purchase-container" element={<PurchaseContainer />}></Route>
              <Route path="/cart" element={<Cart cartArray={cartArray} setCartArray ={setCartArray}/>}></Route>
              <Route path="*" element={<FourOhFour/>}/>
            </Routes>
        </div>
    )

}

export default App
