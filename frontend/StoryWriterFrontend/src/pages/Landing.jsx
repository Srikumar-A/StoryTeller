import React from "react";
import WaveAnimation from "../props/waveAnimation";

export default function Landing(){
    return(
        <>
            <div class="flex items-center justify-center bg-black h-screen">
                <WaveAnimation />
                <div class="text-center">
                    <h1 class="animate-rise text-6xl font-bold text-white mb-4">
                        Welcome to StoryWriter
                    </h1>
                </div>
            </div>
        </>
    )
}