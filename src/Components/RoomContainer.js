import React, {useState, useEffect} from 'react'
import Head from './Head'
import RoomCard from './RoomCard'



function RoomContainer ({setRoom}){

    // function makeCardLists(){
    //     const roomCard = <RoomCard aesthetic={aesthetic} color={color}/>
    // }
    const rooms = ["Livingroom", "Bedroom", "Bathroom"]
    
   

    const roomCards = rooms.map((room)=><RoomCard  room={room} setRoom={setRoom}/>)

    

    return (
       <div>
        <Head/>
        {roomCards}
       </div>

    )
    
}

export default RoomContainer