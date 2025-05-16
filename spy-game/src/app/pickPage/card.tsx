'use client';

import { useState } from 'react';
import Overlay from './overlay';

export default function Card({title}:{title:string}){

    let [picked,setPicked]=useState<boolean>(false)
    

    function handlePicking(){
        setPicked(picked=true)
       
        console.log(picked)
    }

     

    if(!picked)
    return(
        <button className="bg-emerald-50 h-24 w-24 rounded-xl text-center flex justify-center items-center" onClick={handlePicking}>
            <h1 className="text-6xl text-black">?</h1>
        </button>
    );
    else{
        
        return(
            
            <div>
                <Overlay location={title}></Overlay>
                <button className="bg-emerald-50 h-24 w-24 rounded-xl text-center flex justify-center items-center" onClick={handlePicking}>
                <h1 className="text-6xl text-black">X</h1>
                </button>
            </div>
        );
    }
  

}
;
  