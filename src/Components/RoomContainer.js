import React, {useState, useEffect} from 'react'
import Head from './Head'



function RoomContainer ({aesthetic, color}){

    function makeCardLists(){
        const roomCard = <RoomCard aesthetic={aesthetic} color={color}/>
    }


    return (
       <div>
        <Head/>
        

       </div>

    )
    
}

export default RoomContainer