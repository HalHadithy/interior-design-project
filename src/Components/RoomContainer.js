import React from 'react'
import RoomCard from './RoomCard'



function RoomContainer ({setRoom}){

    // function makeCardLists(){
    //     const roomCard = <RoomCard aesthetic={aesthetic} color={color}/>
    // }
    const rooms = ["bedroom", "livingroom", "bathroom"]
    
   

    const roomCards = rooms.map((singleRoom)=><RoomCard key={singleRoom} singleRoom={singleRoom} setRoom={setRoom}/>)

    

    return (
       <div>
        {roomCards}
       </div>
    )
    
}

export default RoomContainer