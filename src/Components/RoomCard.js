import React from 'react'

function RoomCard ({singleRoom, setRoom}){

    function handleRoomClick(){
        setRoom(singleRoom)
    }
    
    return (
        <div onClick={handleRoomClick}>
            <h3>{singleRoom}</h3>
        </div>    
    )
    
}

export default RoomCard


  