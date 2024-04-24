import React from "react";
import TeamTable from "./TeamTable";

export default function PositionsTable(){
    return(
        <div class='w-full h-full py-5 text-main-blue text-2xl'>
            <div class='flex flex-col w-1/2 h-full mx-auto bg-white rounded-xl shadow-lg'>
                <div className='flex flex-row justify-center items-center h-1/5 w-full py-5'>
                    <p class=' h-full text-5xl align-middle'>TABLA</p>
                    <img class= 'h-16 w-16 object-fit' src="static\images\logo kaby.png" alt="logo-kaby" />
                </div>

                <div class='h-4/5'>
                    <div class='grid grid-cols-6'>
                        <div class='text-center'></div>
                        <div class='col-span-2'></div>
                        <div class='text-center'>PTS</div>
                        <div class='text-center'>PJ</div>
                        <div class='text-center'>DF</div>
                    </div>

                    <div class='h-4/5'>
                        <TeamTable position='1' name='Equipo 1' pts='3' pj='1' df='0'/>
                        <TeamTable position='2' name='Equipo 2' pts='3' pj='1' df='0'/>
                        <TeamTable position='3' name='Equipo 3' pts='3' pj='1' df='0'/>
                        <TeamTable position='4' name='Equipo 4' pts='3' pj='1' df='0'/>
                    </div>
                </div>
            </div>
        </div>
    )
}