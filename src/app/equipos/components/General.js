import React from "react";

export default function General(){
    return(
        <section class='h-3/4 px-9 py-4 flex flex-row justify-between pb-6 snap-start'>
            <div class='w-1/3 h-full px-14'>
                <div class='h-12'>
                    <span class='text-3xl'>General</span>
                </div>
                <div class='h-full'>
                    <div class='h-2/5'>
                        <div class='bg-blue-text w-full h-3/4'>
                            <img class='h-full w-auto mx-auto py-2' src="/static/images/barcelona-logo.png" alt="" />
                        </div>
                        <div class='flex flex-row justify-between items-center h-1/4 w-full bg-main-blue pl-3 pr-5'>
                            <span class='text-white text-xl'>Posición</span>
                            <span class='text-[#ff9000] text-xl'>1</span>
                        </div>
                    </div>
                    <div class='h-3/6 flex flex-col text-[#6a6a6a]'>
                        <div class='h-1/3 flex flex-row justify-between px-6'>
                            <div class='flex flex-col items-center justify-center w-1/3'>
                                <span class='text-black text-5xl'>6</span>
                                <span class='text-base'>Ganados</span>
                            </div>

                            <hr class='w-1 h-2/5 bg-[#D9D9D9] my-auto rounded-lg'/>

                            <div class='flex flex-col items-center justify-center w-1/3'>
                                <span class='text-black text-5xl'>3</span>
                                <span class='text-base'>Empates</span>
                            </div>

                            <hr class='w-1 h-2/5 bg-[#D9D9D9] my-auto rounded-lg'/>

                            <div class='flex flex-col items-center justify-center w-1/3'>
                                <span class='text-black text-5xl' >1</span>
                                <span class='text-base'>Derrotas</span>
                            </div>
                        </div>

                        <hr class='w-4/5 h-1 bg-[#D9D9D9] mx-auto rounded-lg'/>

                        <div class='h-1/3 flex flex-col items-center justify-center w-full text-base px-7'>
                            <div class='flex flex-row justify-between w-full'>
                                <span>Goles Marcados</span>
                                <span>12</span>
                            </div>
                            <div class='flex flex-row justify-between w-full'>
                                <span>Goles Recibidos</span>
                                <span>5</span>
                            </div>
                        </div>

                        <hr class='w-4/5 h-1 bg-[#D9D9D9] mx-auto rounded-lg'/>

                        <div class='h-1/3 text-md px-7 flex flex-row justify-between items-center'>
                            <div>
                                <span>Tarjetas</span>
                                <span></span>
                                <span>5</span>
                            </div>
                            <hr />
                            <div>
                                <span>Tarjetas</span>
                                <span></span>
                                <span>2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class='w-1/3 h-full px-14'>
                <div class='text-3xl h-12'>
                    <span>Goleadores</span>
                </div>
                <div class='relative h-full pb-12'>
                    <img class='z-10 absolute w-24 top-16 left-5' src="/static/images/barcelona-logo.png" alt="" />
                    <div class='relative h-2/6 bg-blue-text flex justify-center items-center overflow-hidden'>
                        <img class='w-2/5 -ml-10 mt-20' src="/static/images/cards-23-24_dembele.png" alt="" />
                
                    </div>
                    <div class='h-3/6 text-lg text-[#6a6a6a]'>
                        <ul class='h-full'>
                            <li class='bg-main-blue text-xl text-white flex flex-row justify-between items-center px-4 h-1/4'>
                                <span>1 | Victor M.</span>
                                <span>10</span>
                            </li>
                            <li class='flex flex-row justify-between items-center px-4 h-1/4'>
                                <span>2 | Pedro C.</span>
                                <span>9</span>
                            </li>
                            <li class='flex flex-row justify-between items-center px-4 h-1/4'>
                                <span>3 | Diego M.</span>
                                <span>4</span>
                            </li>
                            <li class='flex flex-row justify-between items-center px-4 h-1/4'>
                                <span>4 | Wilmer A.</span>
                                <span>2</span>
                            </li>
                        </ul>
                    </div>
                    <div class='h-1/6 bg-blue-text'></div>
                </div>
            </div>

            <div class='w-1/3 h-full px-14 pt-12'>
                <div class='w-full bg-blue-text h-full'>
                    <div class='w-full flex flex-col justify-center items-center text-[#ffb800] text-5xl h-1/2'>
                        <span>ULTIMO</span>
                        <span>ENCUENTRO</span>
                    </div>
                    <div class='text-white text-xl flex flex-row justify-center items-center w-full h-1/2 pb-20'>
                        <div class='w-2/5 flex flex-col justify-center p-4'>
                            <img class='h-40' src="/static/images/barcelona-logo.png" alt="" />
                            <span class='text-center'>Jujuy</span>
                        </div>
                        <div class='w-1/5 text-4xl'>
                            <span>2 - 1</span>
                        </div>
                        <div class='w-2/5 flex flex-col justify-center p-4'>
                            <img class='h-40' src="/static/images/real-madrid-logo.webp" alt="" />
                            <span class='text-center'>Parrilleros</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}