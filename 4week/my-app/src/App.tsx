import React, { Component } from 'react';
import './App.css';
import './include/Bootstrap';
import { NavComponent } from './components/nav/Nav.component';
import { HomeComponent } from './components/home/Home.component';
import { ClickerComponent } from './components/clicker/Clicker.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeComponent />
        My react application!!!
        <HomeComponent />
        <HomeComponent />
        <ClickerComponent />
      </div>
    );
  }
}

export default App;
