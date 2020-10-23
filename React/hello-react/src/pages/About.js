import React from 'react';

import Stopwatch from "../Stopwatch"
import Countdown from "../Countdown"

function About() {
    return (
        <div className='about'>
            <h1>About</h1>
            <div className = "Timers">
                <Stopwatch />
                <Countdown />
            </div>
        </div>
        
    );
}

export default About;