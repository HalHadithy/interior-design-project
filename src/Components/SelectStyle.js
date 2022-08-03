// import { func } from 'prop-types'
import React from 'react'
import {useNavigate } from "react-router-dom"



//kind of wanted this to be a pop-up but w/e

function SelectStyle ({setStyleData, styleData}){

    const navigate =  useNavigate();

    function handleStyleChange(event){
        const key = event.target.id
        setStyleData({...styleData, [key]:event.target.value})
    }
    
    console.log(styleData)


    function handleStyleSubmit(event){
        event.preventDefault()
        navigate("/interior-design-container")
    }


//need to style this so it's not poop, get the header over the select and get the button a few lines down

    return (
        <div>
            <form id = "select-style-form" onSubmit={handleStyleSubmit} >
                <h2>Select Your Home Style</h2>
                <label htmlFor="aesthetic">Aesthetic Style</label>
                <select
                    id="aesthetic"
                    value={styleData.aesthetic}
                    onChange={handleStyleChange}
                >
                    <option value="english-cottage">English Cottage</option>
                    <option value="modern-minimalist">Modern Minimalist</option>
                    {/* <option value="gothic-academia">Gothic Academia</option> */}
                </select>

                <label htmlFor="color">Color Scheme</label>
                <select
                    id="color"
                    value={styleData.color}
                    onChange={handleStyleChange}
                >
                    <option value="neutrals">Neutrals</option>
                    {/* <option value="cool-tones">Cool Tones</option> */}
                    <option value="warm-tones">Warm Tones</option>
                </select>
                <input type="submit" value ="Show Me Rooms"/>
            </form>            
        </div>
    )
    
}

export default SelectStyle
