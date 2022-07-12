// import { func } from 'prop-types'
import React, {useState, useEffect} from 'react'
import Head from './Head'
import RoomContainer from './RoomContainer';


//kind of wanted this to be a pop-up but w/e

function SelectStyle (){
    const [formData, setFormData] = useState({
        aesthetic:'Select an Aesthetic',
        color: 'Select a Color Scheme'
        })

    function handleSubmit(event){
        event.preventDefault()
        //I want to use the the formData of info I'm getting as the props for the Room Container
        console.log(formData)
    }

    function handleChange(event){
        const key = event.target.id
        setFormData({...formData, [key]:event.target.value})
    }
    console.log(formData)

//need to style this so it's not poop, get the header over the select and get the button a few lines down

    return (
        <div>
           <Head/>
            <form id = "select-style-form" onSubmit={handleSubmit}>
                <h2>Select Your Home Style</h2>
                <label htmlFor="aesthetic">Aesthetic Style</label>
                <select
                    id="aesthetic"
                    value={formData.aesthetic}
                    onChange={handleChange}
                >
                    <option value="english-cottage">English Cottage</option>
                    <option value="modern-minimalist">Modern Minimalist</option>
                    <option value="gothic-academia">Gothic Academia</option>
                </select>

                <label htmlFor="color">Color Scheme</label>
                <select
                    id="color"
                    value={formData.color}
                    onChange={handleChange}
                >
                    <option value="neutrals">Neutrals</option>
                    <option value="cool-tones">Cool Tones</option>
                    <option value="warm-tones">Warm Tones</option>
                </select>
                <input type="submit" value ="Show Me Rooms"/>
            </form>
            {/* <RoomContainer formData/> */}
            
        </div>
    )
    
}

export default SelectStyle
