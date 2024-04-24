import React from "react";
import Header from "./components/Header";
import Sponsors  from "./components/Sponsors";
import General from "./components/General";
import Team from "./components/Team";
import Players from "./components/Players";

export default function(){
    return(
        <React.Fragment>
                <Header/>
                <Team/>
                <Players/>
                <Sponsors/> 
        </React.Fragment>
    )
}
//<General/>