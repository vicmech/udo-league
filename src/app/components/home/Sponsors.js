import React from "react";

export default function Sponsors(){
    return(
        <div class='flex flex-col justify-center items-center h-1/2'>
            <div class='flex justify-center items-center h-1/5 w-3/4 bg-main-blue'>
                <span class='text-white text-4xl leading-10'>PATROCINADORES</span>
            </div>
            <div class='flex flex-row justify-center items-center h-4/5 py-8 space-x-20'>
                <img class='h-full w-3/5' src="/static/images/sponsors/KabyLN.png" alt="logo-kaby-wear" />
                <img class='h-full w-3/5' src="/static/images/sponsors/Pipos-NombreCompleto.png" alt="logo-pipos-house" />
            </div>
        </div>
    )
}