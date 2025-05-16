'use client';
import { useState } from "react";


export default function Overlay({location}:{location:string}){

let [overlay,setOverlay]=useState<boolean>(true)

function handleOverlay(){
    setOverlay(overlay=false)
}

if(overlay && location!="Spy")
    return(
        <button className="absolute top-0 left-0 h-screen w-screen bg-white z-10" onClick={handleOverlay}>
            <h1 className="text-3xl text-black">The location is</h1>
            <h1 className="text-3xl text-black">{location}</h1>
            <h2 className="text-2xl text-black">Give the phone to the next player</h2>
        </button>
    );
    else if(overlay && location=="Spy")
    return(
        <button  className="absolute top-0 left-0 h-screen w-screen bg-white z-10" onClick={handleOverlay}>
            <h1 className="text-3xl text-black">You are the</h1>
            <h1 className="text-3xl text-black">{location}</h1>
            <h2 className="text-2xl text-black"> Try to blend in</h2>
            <h2 className="text-2xl text-black">Give the phone to the next player</h2>
        </button>
);

}