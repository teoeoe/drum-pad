import React from "react";
import "./Button.css"

export const Button=({power,audioClips,handleSoundPlay,handleDisplayChange})=>

    audioClips.map((soundObj,index)=> 
    <button
        disabled={power}
        className="drum-pad"
        id={soundObj.label+'+'} 
        onClick={()=>{
            handleSoundPlay(soundObj.label);
            handleDisplayChange(soundObj.string)
    }}>

        {soundObj.label}

        <audio className="clip" id={soundObj.label} src={soundObj.sound}></audio>

    </button>)

