// import the style sheets
import "./App.css"
import "./style/cart-container.css"
import "./style/head-container.css"
import "./style/nav-bar.css"
import "./style/purchase-container.css"
import "./style/room-container.css"
import "./style/select-style-container.css"
// end import the style sheets



// import react functionality 
import { Routes, Route } from "react-router-dom"
import React, {useState, useEffect} from 'react'
// end import react functionality 


// import Components
import PurchaseContainer from './Components/IntDesignContainter.js'
import SelectStyle from './Components/SelectStyle.js'
import Cart from './Components/Cart'
import FourOhFour from "./Components/FourOhFour"
//end import Components



function App (){
  
  const [cartArray, setCartArray]  = useState([])
  
  const [styleData, setStyleData] = useState({
        aesthetic:'Select an Aesthetic',
        color: 'Select a Color Scheme'
   })

  useEffect(()=>{ })
     // {
    //   id: "",
    //   itemName:"",
    //   itemImage: "",
    //   itemCount: 0
    // }


    function handleStyleSubmit(event){
      event.preventDefault()
      //I want to use the the formData of info I'm getting as the props for the Room Container
      console.log()
    }

    
  
  console.log(formData)

  

    return (        
        <div>
            <Routes >        
              {/* build so when we are in specific URS'l so we can got o  */}
              <Route path="/" element={<SelectStyle handleStyleSubmit={handleStyleSubmit} setStyleData={setStyleData} styleData={styleData}/>}></Route>
              <Route path="/purchase-container" element={<PurchaseContainer />}></Route>
              <Route path="/cart" element={<Cart cartArray={cartArray} setCartArray ={setCartArray}/>}></Route>
              <Route path="*" element={<FourOhFour/>}/>
            </Routes>
        </div>
    )

}

export default App




// "https://www.countryliving.com/home-design/decorating-ideas/g4263/rustic-farmhouse-kitchen-ideas/"
// "https://nordicdesign.ca/tour-a-modern-warm-and-minimal-scandinavian-home/"
