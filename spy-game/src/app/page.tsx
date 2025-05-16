'use client';
import { useState } from "react";

export default function mainPage(){


    const [numberOfPlayers,setNumberOfPlayers] = useState(2)
    
    function sendData(){
        let curentlyPlaying:string=numberOfPlayers.toString();
        localStorage.setItem('1',curentlyPlaying)
        window.location.href="./pickPage"
    }

    return(
         <div className="h-dvh flex flex-col justify-center items-center gap-5">
            <h1 className="font-bold text-4xl mb-20">Number of Players</h1>
            <h1 className="font-extrabold text-6xl mb-14">{numberOfPlayers}</h1>
            <input id="slider" className=" slider w-2/3 bg-white rounded-4xl" type='range' min='2' max='20' value={numberOfPlayers} onChange={(e)=>{setNumberOfPlayers(Number(e.target.value)) }}></input>
            <button onClick={sendData} className="bg-amber-50 w-28 h-14 text-black rounded-4xl font-bold text-2xl">Next</button>
         </div>
    );
}