import React from'react';
/* creando el*/
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
    )
  }
}
export default Encabezado
