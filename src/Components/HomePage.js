import React, {useState, useEffect} from 'react'
import Cart from './Cart'
import Head from './Head'


function HomePage (cartArray, setCartArray){

    function updateState(){
        setCartArray()
    }
    return (
        <div>
            <Head cartArray={cartArray} setCartArray ={setCartArray}/>
        </div>
        
    )
    
}

export default HomePage