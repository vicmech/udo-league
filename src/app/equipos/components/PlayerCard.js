import React from "react";

export default function PlayerCard(props){
    return(
        <div class='relative w-full h-full max-h-64 preserve-3d group [transform-style:preserve-3d] [perspective:1000px]'>
            <div class='absolute w-full h-full bg-main-blue rounded-3xl [transform:rotateY(180deg)] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden] duration-1000'>
                <div class='h-1/2 w-full text-7xl text-[#ff9000] flex justify-center items-end [bg-white]  '><span>#{props.Number}</span></div>
                <div class='h-1/2 w-full text-3xl text-white flex justify-center items-center'><span>{props.Name}</span></div>
            </div>

            <div class='absolute w-full h-full text-white bg-main-blue rounded-3xl  group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden] duration-1000'>
                <div class='w-full h-1/3 text-center text-3xl flex justify-center items-center'><span>{props.Name}</span></div>
                <div class='w-full h-1/3 flex flex-col justify-center items-center'>
                    <span class='text-6xl'>4</span>
                    <span class='text-lg'>Goles</span>
                </div>
                <div class='w-full h-1/3 text-lg flex flex-col justify-center items-center px-20'>
                    <div class='w-full flex flex-row justify-between items-center pb-1'>
                        <span>Tarjetas</span>
                        <span class='bg-yellow-400 px-1'>0</span>
                    </div>
                    <div class='w-full flex flex-row justify-between items-center pt-1'>
                        <span>Tarjetas</span>
                        <span class='bg-red-700 px-1'>0</span>
                    </div>
                </div>
            </div>

            <div class='group-hover:text-red-600 py-80'>Hola</div>
        </div> 
    )
}