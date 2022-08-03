import React, {useState, useEffect} from 'react'
import PurchaseContainer from './PurchaseContainer'
import RoomContainer from './RoomContainer'

function IntDesignContainter ({cartArray, setCartArray, styleData}){

    const[room, setRoom]= useState('bathroom')
    const [roomsArray, setRoomsArray] = useState({})

    useEffect(() => {
        // console.log("useEffect is starting")
        fetch(`http://localhost:8004/purchase`)
        .then(response => response.json())
        .then((data) => setRoomsArray(data))
      },[])

      const array = roomsArray.keys()//((roomObject) => roomObject.keys() === room)
      console.log(array)
      console.log(roomsArray.bathroom)
      console.log(room)

    return (
        <div>
            <RoomContainer setRoom={setRoom}/>
            <PurchaseContainer 
                roomsArray={roomsArray.room} 
                cartArray={cartArray} 
                setCartArray={setCartArray} 
                styleData={styleData}
            />
        </div>
    )
    
}

export default IntDesignContainter