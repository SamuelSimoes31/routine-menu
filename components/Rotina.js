import React from 'react';


class Rotina extends React.Components{

    render(){

      return(
        <div className = "BlocoDeCompromisso">
          <label className = "Horario">
              Hora:Minuto
          </label>
          -
          <label for className = "Compromisso">
              Compromisso
          </label>
        </div>
      );

    }

}