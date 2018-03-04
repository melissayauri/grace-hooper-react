import React, { Component } from 'react';
/*import logo from './logo.svg';
import './App.css';*/
import Encabezado from './header.js';
import Biography from './biography.js';
class App extends Component {
  render() {
    return (
      <div>
          <Encabezado/>
          <Biography/>
      </div>

    );
  }
}

export default App;
