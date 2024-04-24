import React from "react";
import ResultCard from "./ResultCard";

export default function Results(){
    return(
        <div class='h-2/5'>
            <div class='flex flex-col justify-center items-center space-y-2 text-main-blue h-1/2'>
                <p class='text-2xl'>Resultados</p>
                <ul class='flex flex-row space-x-12 px-10 text-2xl'>
                    <li class='rounded-lg hover:text-white hover:bg-main-blue px-3 py-0'>F1</li>
                    <li class='rounded-lg hover:text-white hover:bg-main-blue px-3 py-0'>F2</li>
                    <li class='rounded-lg hover:text-white hover:bg-main-blue px-3 py-0'>F3</li>
                    <li class='rounded-lg hover:text-white hover:bg-main-blue px-3 py-0'>F4</li>
                    <li class='rounded-lg hover:text-white hover:bg-main-blue px-3 py-0'>F5</li>
                    <li class='rounded-lg hover:text-white hover:bg-main-blue px-3 py-0'>F6</li>
                    <li class='rounded-lg hover:text-white hover:bg-main-blue px-3 py-0'>F7</li>
                    <li class='rounded-lg hover:text-white hover:bg-main-blue px-3 py-0'>F8</li>
                    <li class='rounded-lg hover:text-white hover:bg-main-blue px-3 py-0'>F9</li>
                    <li class='rounded-lg hover:text-white hover:bg-main-blue px-3 py-0'>F10</li>
                </ul>
            </div>
            <div class='flex flex-row items-center w-full h-1/2 px-8 space-x-11'>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>  
            </div>
        </div>
    )
}