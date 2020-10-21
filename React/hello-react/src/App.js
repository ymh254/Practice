import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Counter from './Counter';
import Stopwatch from "./Stopwatch"
import Countdown from "./Countdown"
import Navbar from './Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'


function App() {
    return (
      <>
        <div className="App">
            <Router>
              <Navbar/>
                <Switch>
                  <Route path='/' exact component={Home}/>
                  <Route path='/about' component={About} />
                </Switch>
            </Router>
          <div className = "Timers">
            <Stopwatch />
            <Countdown />
          </div>
        </div>
      </>
    );
}

export default App;