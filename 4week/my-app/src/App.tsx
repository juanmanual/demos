import React, { Component } from 'react';
import './App.css';
import './include/Bootstrap';
import { NavComponent } from './components/nav/Nav.component';
import { HomeComponent } from './components/home/Home.component';
import { ClickerComponent } from './components/clicker/Clicker.component';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavComponent />

          <Route path="/home" component={HomeComponent} />
          <Route path="/clicker" component={ClickerComponent} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
