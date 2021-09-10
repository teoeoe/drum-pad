import React,{useState,useEffect} from 'react';
import './App.css';
import Q from "./audioclips/Heater-1.mp3";
import W from "./audioclips/Heater-2.mp3";
import E from "./audioclips/Heater-3.mp3";
import A from "./audioclips/Heater-4_1.mp3";
import S from "./audioclips/Kick_n_Hat.mp3";
import D from "./audioclips/RP4_KICK_1.mp3";
import Z from "./audioclips/Cev_H2.mp3";
import X from "./audioclips/Dsc_Oh.mp3";
import C from "./audioclips/Heater-6.mp3";
import { ButtonGroup } from './components/ButtonGroup';

function App() {
  const audioClips=[
    {keyCode: 81,sound:Q,label:'Q',string:"Heater 1"},
    {keyCode: 87,sound:W,label:'W',string:"Heater 2"},
    {keyCode: 69,sound:E,label:'E',string:"Heater 3"},
    {keyCode: 65,sound:A,label:'A',string:"Heater 4"},
    {keyCode: 83,sound:S,label:'S',string:"Kick'n'Hat"},
    {keyCode: 68,sound:D,label:'D',string:"RP4 KICK"},
    {keyCode: 90,sound:Z,label:'Z',string:"Cev H2"},
    {keyCode: 88,sound:X,label:'X',string:"Dsc Oh"},
    {keyCode: 67,sound:C,label:'C',string:"Heater 6"}
];

const [displayName, setDisplayName] = useState("");

const [power, setPower]=useState(false);

const handleKeyPress=(event)=>{
  audioClips.map((audios)=>{
    if (event.keyCode === audios.keyCode) {
      playKey(audios.label);
      setDisplayName(audios.string);
    }
    return null;
  })
}

useEffect(()=>{
  document.addEventListener('keydown', handleKeyPress);
});

const playKey = (key) => {
  let audioEl = document.getElementById(key);
  audioEl.volume = 0.3;
  audioEl.currentTime = 0;
  audioEl.play();
};

const displayChange=(elem)=>{
  setDisplayName(elem);
}

const turnOnOff=()=>{
  setDisplayName("")
  setPower(!power);
}

return(
<div className="App" id="drum-machine">
  <div className="drum-setup">
     <ButtonGroup power={power} audioClips={audioClips} handleSoundPlay={playKey} handleDisplayChange={displayChange}/>
    <div id="right-side">
      <div id="display">
       <span>{displayName}</span>
      </div>
      <div id="turn-on-off"><button className={`${
        power ? "green" : "red"
      }`} onClick={turnOnOff}>{power? <span>ON</span>: <span>OFF</span>}</button></div>
    </div>
  </div>
</div>
)
}

export default App;
