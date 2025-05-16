
'use client';
import { title } from "process";
import { JSX, useEffect,useState } from "react";
import Card from "./card";

export default function Home() {
  const locations = [
  "Police Station",
  "Hospital",
  "Bank",
  "Courtroom",
  "Subway Station",
  "Library",
  "Supermarket",
  "Fire Station",
  "Shopping Mall",
  "School",
  "Airport",
  "Train Station",
  "Cruise Ship",
  "Gas Station",
  "Bus Terminal",
  "Border Crossing",
  "Space Station",
  "Airplane",
  "Ferry",
  "Parking Garage",
  "Army Base",
  "Submarine",
  "Bunker",
  "Military Checkpoint",
  "Embassy",
  "Cinema",
  "Theater",
  "Casino",
  "Amusement Park",
  "Circus",
  "Zoo",
  "Art Museum",
  "Aquarium",
  "Nightclub",
  "Stadium",
  "Restaurant",
  "Café",
  "Hotel",
  "Fast Food Joint",
  "Food Truck",
  "Campsite",
  "Beach",
  "Ski Resort",
  "Forest Cabin",
  "National Park",
  "Factory",
  "Construction Site",
  "Laboratory",
  "Oil Rig",
  "TV Studio",
  "Warzone",
  "McDonald's",
  "Escape Room",
  "Prison",
  "Wedding Venue"
];

const [cardItems, setCardItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const places = shuffleLocation();
    const cards = places.map((location, key) => (
      <Card key={key} title={location} />
    ));
    setCardItems(cards);
  }, []);


function shuffleLocation(){
 
  const randomChoice:number=Math.floor(Math.random()*(locations.length-0))
  console.log(randomChoice)
  const place=locations[randomChoice];
  
  const playerNo:number=parseInt(localStorage.getItem('1') || '0');
  let order=[];
  for(let i=0;i<playerNo;i++){
      order[i]=place;
  }
  const spy=Math.floor(Math.random()*(playerNo-1))
  order[spy]="Spy"
  console.log(order)
  return order;
}

  
 

  return (
    <div className="relative">
      <h1 className="absolute text-6xl text-center ml-6 font-extrabold">Pick a Card</h1>
      <div className="h-dvh flex justify-center items-center">
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {cardItems}
        </div>
      </div>
    </div>
  );
}
