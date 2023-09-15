'use client';
import React, { useEffect, useRef } from "react";
const Banner = () => {
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
            console.error("Error attempting to play", error);
        });
    };

    useEffect(() => {
        attemptPlay();
    }, []);
    return (
           <div className="relative">
               <video className="w-full h-[70%]" autoPlay controls  muted  ref={videoEl} poster="https://github.com/phuongthaotrinh/laravel_vuejs/assets/51841214/876137f5-5789-4bb9-b5e4-c346ad077429" >
                   <source src="/video/movie_20230821_eng.mp4" type="video/mp4" />
                   Your browser does not support the video tag.
               </video>
           </div>
    )
}
export  default  Banner