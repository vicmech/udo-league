import React from "react";

export default function ResultCard(){
    return(
        <div class='flex flex-col items-center justify-center w-60 h-24 bg-white rounded-3xl shadow-lg'>
            <div class='self-end h-1/5 w-1/2 bg-main-blue rounded-se-3xl rounded-es-3xl'>
                <p class='text-center text-white h-full leading-5'>02-04</p>
            </div>

            <div class='flex flex-row items-center justify-center h-3/5 w-full px-2'>
                <div class='w-1/3 h-full'>
                    <img class='w-full h-full object-fit' src="\static\images\barcelona-logo.png" alt="" />
                </div>
                <span class='w-2/5 text-center text-main-blue leading-5'>- vs -</span>
                <div class='w-1/3 h-full'>
                    <img class='w-full h-full object-fit' src="\static\images\real-madrid-logo.webp" alt="" />
                </div>
            </div>

            <div class='h-1/5 w-full text-center text-main-blue leading-5'>
                1 - 2
            </div>
        </div>
    )
}