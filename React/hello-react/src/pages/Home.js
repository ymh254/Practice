import React from 'react';

import Stopwatch from "../Stopwatch"
import Countdown from "../Countdown"

function Home() {
    return (
        <div className='home'>
            <h1>Home</h1>
            <div className = "Timers">
                <Stopwatch />
                <Countdown />
            </div>
        </div>
    );
}

export default Home;