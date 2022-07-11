// import { func } from 'prop-types'
import React, {useState, useEffect} from 'react'
import Head from './Head'


//kind of wanted this to be a pop-up but w/e

function SelectStyle (){
    const [aesthetic, setAesthetic] = useState('Select an Aesthetic')
    const [color, setColor] = useState('Select a Color Scheme')

    function handleSubmit(event){
        event.preventDefault()

    }

//need to style this so it's not poop, get the header over the select and get the button a few lines down

    return (
        <div>
           <Head/>
            <form id = "select-style-form" onSubmit={handleSubmit}>
                <h2>Select Your Home Style</h2>
                <label htmlFor="aesthetic">Aesthetic Style</label>
                <select
                    id="aesthetic"
                    value={aesthetic}
                    onChange={(e) => setAesthetic(e.target.value)}
                >
                    <option value="english-cottage">English Cottage</option>
                    <option value="modern-minimalist">Modern Minimalist</option>
                    <option value="gothic-academia">Gothic Academia</option>
                </select>

                <label htmlFor="color">Color Scheme</label>
                <select
                    id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                >
                    <option value="neutrals">Neutrals</option>
                    <option value="cool-tones">Cool Tones</option>
                    <option value="warm-tones">Warm Tones</option>
                </select>
                <input type="submit" value ="Show Me Rooms"/>
            </form>
           
            
        </div>
    )
    
}

export default SelectStyle
