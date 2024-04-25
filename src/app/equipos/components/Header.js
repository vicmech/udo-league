import React from "react";

export default function Header(){
    return(
        <header class='w-full h-1/6 flex flex-row'>
            <div class='absolute w-36 h-20 overflow-hidden'>
                <img class='absolute z-10 h-20 w-20' src="/static/images/Isotipo-Oficial.png" alt="" />
                <div class='absolute z-0 w-36 h-36 -ml-14 -mt-8 flex justify-start items-start bg-white rounded-full bg-clip-content'></div>
            </div>
            <div class='w-full h-full'>
                <div class='h-1/2 bg-main-blue align-middle text-start pl-24 text-white text-3xl leading-10'>UDO LEAGUE</div>
                <nav class='h-1/2 flex flex-row justify-center items-center bg-white'>
                    <ul class='h-1/2 w-full px-20 flex flex-row justify-center items-center justify-around text-2xl text-grayText'>
                        <li class='decoration-4 hover:underline decoration-main-blue'><a href="/">Inicio</a></li>
                        <li class='decoration-4 hover:underline decoration-main-blue'>Tabla</li>
                        <li ><a href="#teams" class='decoration-4 hover:underline decoration-main-blue'>Equipos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}