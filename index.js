import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import 'antd/es/date-picker/style/css';
import InputLabel from './components/InputLabel.js'



import Entrar from './components/Entrar.js'
import Button from '@material-ui/core/Button';
import Registro from './components/Registro.js';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

/////////////////////////////////
import Lista from './components/ListaMenu.js'
/////////////////////////////////////


//<InputLabel/>
//
class App extends Component {

  render() {
    const obj = [{
      nome: 'Fulana 1',
      parentesco: 'Conhecida',
      imgURL: 'https://i.pinimg.com/originals/cd/b9/49/cdb9491ba96263a4f89f6d062412956f.jpg'
    },
    {
       nome: 'Fulana 2',
      parentesco: 'Sumida',
      imgURL: 'https://i.pinimg.com/originals/cd/b9/49/cdb9491ba96263a4f89f6d062412956f.jpg'
    },
    {   nome: 'Fulana 3',
      parentesco: 'Disvorciada',
      imgURL: 'https://i.pinimg.com/originals/cd/b9/49/cdb9491ba96263a4f89f6d062412956f.jpg'
    },
    {   nome: 'Fulana 4',
      parentesco: 'Melhor nem lembrar',
      imgURL: 'https://i.pinimg.com/originals/cd/b9/49/cdb9491ba96263a4f89f6d062412956f.jpg'
    },
    {   nome: 'Fulana 5',
      parentesco: 'Conhecida',
      imgURL: 'https://i.pinimg.com/originals/cd/b9/49/cdb9491ba96263a4f89f6d062412956f.jpg'
    },
    {
    }];
    

    return (
      <div className="Background">
          <Lista 
            itens = {obj} 
            tam = {obj.length}
          />
      </div>
    );
  }
}

render(<BrowserRouter>
  <Switch>
            <Route path='/' exact component={App} />
            <Route path='/menu' exact component={App} />
  </Switch>
</BrowserRouter>, document.getElementById('root'));
