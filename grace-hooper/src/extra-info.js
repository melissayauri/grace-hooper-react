import React from'react'
/* Componente biografia a traves de un función*/
const ExtraInfo = ({pros}) => {
  return(
    <section>
      <h4>Career</h4>
      <ol>
        <li>World War II</li>
        <li>UNIVAC</li>
        <li>COBOL</li>
        <li>Standars</li>
      </ol>
      <h3>Phrase</h3>
        <blockquote cite="https://pymex.pe/liderazgo/frases/la-frase-mas-peligrosa-de-una-lengua-es-grace-hopper">
          “La frase más peligrosa de una lengua es: Siempre lo hemos hecho así.”
        </blockquote>
        <a href="#" target="_blank">See more</a>
      </section>
  );
}

export default ExtraInfo
