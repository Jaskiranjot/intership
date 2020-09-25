import React from 'react';
import {nameObject, oppSection, hours} from './ProfileEdit';


function Home() {
    return (
        <div>
        <h1 classname="WelcomeSection"> {nameObject}</h1>
        <h1 classname="Opportunities"> {oppSection} </h1>
        <h1 classname="historyHours"> {hours} </h1>
        </div>
    )
}