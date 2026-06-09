import React from "react";


export default function Landing(){
    function redirectToStudio(){
        window.location.href = "/studio";
    }
    return(
        <>
            <div class="flex items-center justify-center bg-black h-screen">
                <div class="text-center">

                    <h1 class="animate-rise text-6xl font-bold text-white mb-4">
                        Welcome to Music Mix
                    </h1>
                    <div class="animate-rise text-1xl text-gray-300 mb-8">
                        An open source platform for analyzing individual audio track and finding the mix compatibility with two audio tracks.
                    </div>
                    <button class="animate-rise text-1xl text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded" onClick={redirectToStudio}>
                        Let's get Started
                    </button>
                </div>
            </div>
        </>
    )
}