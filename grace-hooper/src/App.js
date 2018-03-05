/* Importado la librería React y la clase component */
import React, { Component } from 'react';
import './App.css';
/* importando el componente encabezado*/
import Encabezado from './header.js';
/* importando el componente biografía de grace hooper*/
import Biography from './biography.js';
/* importando el componente  summary de Grace Hooper*/
import Summary from './summary.js';
/* importando el componente extra-info */
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
