import React, { Component } from 'react';
/*import logo from './logo.svg';
import './App.css';*/
/* importando el encabezado*/
import Encabezado from './header.js';
/* importando la biografía de grace hooper*/
import Biography from './biography.js';
import Summary from './summary.js';
import ExtraInfo from './extra-info.js';
class App extends Component {
  render() {
    return (
      <div>
          <Encabezado/>
          <Biography/>
          <Summary/>
          <ExtraInfo/>
      </div>

    );
  }
}

export default App;
