import React from "react";

export default function Team(){
    return(
        <div class='text-blue-text h-5/6'>
            <div class='bg-blue-text flex justify-center items-center h-3/5'>
                <img class='h-4/5 w-auto' src="/static/images/barcelona-logo.png" alt="" />
            </div>
            <div class='text-4xl h-2/5 w-full flex flex-col justify-around px-12'>
                <h3>JUJUY FC</h3>
                <ul class='flex flex-row justify-between w-9/12'>
                    <li><a href="#">General</a></li>
                    <li><a href="#">Equipo</a></li>
                    <li><a href="#">Calendario</a></li>
                </ul>
            </div>
        </div>
    )
}