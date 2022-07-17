// import { func } from 'prop-types'
import React, {useState, useEffect} from 'react'
import Head from './Head'
import RoomContainer from './RoomContainer';


//kind of wanted this to be a pop-up but w/e

function SelectStyle ({handleStyleSubmit, setStyleData, styleData}){

    function handleStyleChange(event){
        const key = event.target.id
        setStyleData({...styleData, [key]:event.target.value})
    }
    

//need to style this so it's not poop, get the header over the select and get the button a few lines down

    return (
        <div>
           <Head/>
            <form id = "select-style-form" onSubmit={handleStyleSubmit}>
                <h2>Select Your Home Style</h2>
                <label htmlFor="aesthetic">Aesthetic Style</label>
                <select
                    id="aesthetic"
                    value={styleData.aesthetic}
                    onChange={handleStyleChange}
                >
                    <option value="english-cottage">English Cottage</option>
                    <option value="modern-minimalist">Modern Minimalist</option>
                    <option value="gothic-academia">Gothic Academia</option>
                </select>

                <label htmlFor="color">Color Scheme</label>
                <select
                    id="color"
                    value={styleData.color}
                    onChange={handleStyleChange}
                >
                    <option value="neutrals">Neutrals</option>
                    <option value="cool-tones">Cool Tones</option>
                    <option value="warm-tones">Warm Tones</option>
                </select>
                <input type="submit" value ="Show Me Rooms"/>
            </form>
            {/* link this somehow on the submit event <RoomContainer styleData/> */}
            
        </div>
    )
    
}

export default SelectStyle
