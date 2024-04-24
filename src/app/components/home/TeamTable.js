import React from "react";

export default function TeamTable(props){
    return(
        <div class='grid grid-cols-6 grid-rows-1 hover:bg-grayText py-1'>
            <div class='text-center'>{props.position}</div>
            <div class='col-span-2 text-start'>{props.name}</div>
            <div class='text-center'>{props.pts}</div>
            <div class='text-center'>{props.pj}</div>
            <div class='text-center'>{props.df}</div>
        </div>
    )
}