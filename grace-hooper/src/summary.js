import React from'react'
import grace from './grace.jpg';
/* Componente summary a traves de un función*/
const Summary = ({props}) => {
  return(
    <aside class="summary">
      <table class="summary-table">
        <thead>
          <tr>
          <th colspan="2">Grace Murray Hopper</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td colspan="2">
            <img src={grace} alt="Grace Hooper"/>
            <p>Rear Admiral Grace M. Hopper, 1984</p>
          </td>
        </tr>
        <tr>
          <th>NickName</th>
          <td>"Amazing grace"</td>
        </tr>
        <tr>
          <th>Born</th>
          <td>December 9, 1906</td>
        </tr>
        <tr>
          <th>Died</th>
          <td>January 1, 1992 (aged 85)</td>
        </tr>
        <tr>
          <th>Allegiance</th>
          <td>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png" alt="Bandera de Estados Unidos"/>United States of America</td>
        </tr>
      </tbody>
    </table>
  </aside>
  );
}
/* Exportando el componente*/
export default Summary
