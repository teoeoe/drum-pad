import React from "react";
import "./ButtonGroup.css"
import { Button } from "./Button";

export const ButtonGroup=({power,audioClips,handleSoundPlay,handleDisplayChange})=>
    <div className="grid">
    <Button power={power} audioClips={audioClips} handleSoundPlay={handleSoundPlay} handleDisplayChange={handleDisplayChange}></Button>
    </div>

