import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Counter from './Counter';
import Stopwatch from "./Stopwatch"
import Countdown from "./Countdown"
import Navbar from './Navbar/Navbar'

function App() {
    return (
      <>
        {/* <div className="App">
          <div className = "App-title">Timers Demo</div> */}
            <Router>
              <Navbar/>
                <Switch>
                  <Route path='/'></Route>
                </Switch>
            </Router>
          {/* <div className = "Timers">
            <Stopwatch />
            <Countdown />
          </div>
        </div> */}
      </>
    );
}

export default App;