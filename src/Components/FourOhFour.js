import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FourOhFour(){


    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        }, 900)

    }, [])


    return(
        <h1>Oops, this isn't a valid page!</h1>
    )
}

export default FourOhFour