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
import React, {useState} from 'react'
// end import react functionality 


// import Components
import SelectStyle from './Components/SelectStyle.js'
import Cart from './Components/Cart'
import Head from './Components/Head'
import FourOhFour from "./Components/FourOhFour"
import IntDesignContainter from "./Components/IntDesignContainter.js"
//end import Components



function App (){
  
  const [cartArray, setCartArray]  = useState([])
  
  const [styleData, setStyleData] = useState({
        aesthetic:'english-cottage', 
        color: 'neutrals'
  })



    function removeItem(item){
      setCartArray(cartArray.filter((eachArrayItem)=>(eachArrayItem.cartItem !== item.cartItem)))
    }

    function addItem(){
        setCartArray(cartArray.itemCount)
    }
    
  


  

    return (
        <div>
          <Head cartArray={cartArray}/>
            <Routes >        
              <Route path="/" element={<SelectStyle 
                //handleStyleSubmit={handleStyleSubmit} 
                setStyleData={setStyleData} 
                styleData={styleData}
              />}/>

              <Route path="/interior-design-container" element={<IntDesignContainter
                cartArray={cartArray} 
                setCartArray ={setCartArray}
                styleData={styleData}
              />}/>

              <Route path="/cart" element={<Cart 
                cartArray={cartArray} 
                removeItem={removeItem}
                addItem={addItem}
              />}/>

              <Route path="*" element={<FourOhFour/>}/>

            </Routes>
        </div>
    )

}

export default App




// "https://www.countryliving.com/home-design/decorating-ideas/g4263/rustic-farmhouse-kitchen-ideas/"
// "https://nordicdesign.ca/tour-a-modern-warm-and-minimal-scandinavian-home/"

//alternative image
//https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg
