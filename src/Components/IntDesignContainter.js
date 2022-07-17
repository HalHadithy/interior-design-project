import React, {useState, useEffect} from 'react'
import PurchaseContainer from './PurchaseContainer'
import RoomContainer from './RoomContainer'

function IntDesignContainter (){

    const[room, setRoom]=useState('')




    return (
        <div>
            <Head/>
            <RoomContainer setRoom={setRoom}/>
            <PurchaseContainer room={room}/>
        </div>
    )
    
}

export default IntDesignContainter