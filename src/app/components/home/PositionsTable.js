import React from "react";
import TeamTable from "./TeamTable";

export default function PositionsTable(){
    return(
        <div class='w-full h-full py-5 text-main-blue text-2xl' id='table'>
            <div class='flex flex-col w-1/2 h-full mx-auto bg-white rounded-xl shadow-lg'>
                <div className='flex flex-row justify-center items-center h-1/5 w-full space-x-6'>
                    <div class='h-full flex justify-center items-center'>
                        <p class='text-6xl align-middle'>TABLA</p>
                    </div>
                    <img class= 'h-16 object-fit' src="static\images\sponsors/KabyLn.png" alt="logo-kaby" />
                </div>

                <div class='h-4/5'>
                    <div class='grid grid-cols-6 h-1/6'>
                        <div class='text-center'></div>
                        <div class='col-span-2'></div>
                        <div class='text-center my-auto'><span>PTS</span></div>
                        <div class='text-center my-auto'><span>PJ</span></div>
                        <div class='text-center my-auto'><span>DF</span></div>
                    </div>

                    <div class='h-5/6'>
                        <TeamTable position='1' name='Rucio Moro FC' pts='3' pj='1' df='0'/>
                        <TeamTable position='2' name='Cantineros FC' pts='3' pj='1' df='0'/>
                        <TeamTable position='3' name='Academia Admin FC' pts='3' pj='1' df='0'/>
                        <TeamTable position='4' name='Distrito 10 FC' pts='3' pj='1' df='0'/>
                        <TeamTable position='5' name='Anonymous FC' pts='3' pj='1' df='0'/>
                        <TeamTable position='6' name='Black Panthers FC' pts='3' pj='1' df='0'/>
                        <TeamTable position='7' name='CD Real Olimpus' pts='3' pj='1' df='0'/>
                        <TeamTable position='8' name='Medicals FC' pts='3' pj='1' df='0'/>
                        <TeamTable position='9' name='Santos FC' pts='3' pj='1' df='0'/>
                        <TeamTable position='10' name='Titans FC' pts='3' pj='1' df='0'/>
                        <TeamTable position='11' name='Troncos FC' pts='3' pj='1' df='0'/>
                        <TeamTable position='12' class='bg-black' name='Civil FC' pts='3' pj='1' df='0'/>
                    </div>
                </div>
            </div>
        </div>
    )
}