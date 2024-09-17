import React, { useEffect, useRef, useState } from "react";
import { bio } from "../utils/Bio";
import { useCallback } from "react";

const Introduction = () => {
  let i = useRef(0);
  const [tagline, settagline] = useState("I build dynamic digital .");

  const shuffleTagLine = useCallback(() => {
    
    const currentIndex = i.current;
    i.current = (currentIndex + 1)% bio.length;

    settagline(bio[currentIndex]);
  },[]);


  useEffect(() => {
    const intervalId = setInterval( shuffleTagLine , 2000);
  
    return () => {
      clearInterval(intervalId);
    }
  }, [shuffleTagLine])
  

  return (
    <div className="relative h-[90vh]">
      <div className=" absolute left-[5%] md:left-[10%] lg:left-[25%] top-[30%] space-y-5 h-full">
        <p className="brown">Hi , My name is </p>
        <div className="font-semibold text-3xl md:text-5xl grey space-y-2">
          <p>Sayan Roy </p>
          <p className="opacity-75 ">{tagline}</p>
        </div>
        <p className="w-4/5 md:w-2/4 brown text-left">
        I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at 
          <span className="grey font-bold"> Thoughtworks</span>
        </p>
      </div>
    </div>
  );
};

export default Introduction;
