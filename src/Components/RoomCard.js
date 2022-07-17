import React, {useState} from 'react'

function RoomCard ({room, setRoom}){

    function handleRoomClick(){
        setRoom(room)
    }
    return (
        <div onClick={handleRoomClick}>
            <h3>{room}</h3>
        </div>    

    )
    
}

export default RoomCard


  