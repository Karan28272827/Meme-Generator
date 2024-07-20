import React from "react";
import memesData from "../memesData";

let url 
export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState("")
    const[meme, setMeme] = React.useState({
        topText:"",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"

    })
    const[allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages .data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage : url
        }))
        
    }
    return(
        <main>
            <p>{url}</p>
            <form className="form">
                
                    <label className="form--label"  htmlFor="toptext"> Top text </label>
                        <input
                        id="toptext" 
                            type="text" 
                            className="form--input"
                            placeholder="toptext"
                        />
                    
                
                <label className="form--label" htmlFor="bottomtext"> Bottom text</label>
                <input 
                    id="bottomtext"
                    type="text" 
                    className="form--input" 
                    placeholder="bottomtext"
                />
                
                <br></br>
                
             </form>
             <button 
                className="form--button"
                onClick={getMemeImage}
             >
                Get a new meme image 🖼</button>
                <img src={meme.randomImage} className="meme--image" />
        </main>
    ) 
}