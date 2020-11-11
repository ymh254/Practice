import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Counter from './Counter';
import Navbar from './Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import MyCalendar from './pages/MyCalendar';


function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/MyCalendar' component={MyCalendar} />
            <Route path="/users" component={Users} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;