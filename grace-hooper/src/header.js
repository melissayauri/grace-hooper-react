import React from'react';
/* creando el componente header*/
class Encabezado extends React.Component {
  constructor(args) {
    super(args)
    this.state ={}
  }
  render(){
    return(
       <header>
         <h1>Grace Hooper</h1>
         <hr/>
       </header>
    );
  }
}
/* Exportando el encabezado*/
export default Encabezado
