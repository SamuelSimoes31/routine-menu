import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import 'antd/es/date-picker/style/css';
import InputLabel from './components/InputLabel.js'
import Lista from './components/Lista.js'
import Entrar from './components/Entrar.js'
import Button from '@material-ui/core/Button';
import Registro from './components/Registro.js';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

//<InputLabel/>
//
class App extends Component {

  render() {
    const obj = [{
      nome: 'Seus Objetos',
      icon: 'key',
      path: '/objetos/visualizar'
    },
    {
      nome: 'Pessoas',
      icon: 'user',
      path: '/'
    },
    {
      nome: 'Remédios',
      icon: 'medicine-box',
      path: '/remedios/visualizar'
    },
    {
      nome: 'Rotina',
      icon: 'clock-circle',
      path: '/rotina/visualizar'
    },
    {
      nome: 'menu',
      icon: 'icon2',
      path: '/menu'
    },
    {
      nome: 'menu',
      icon: 'icon2',
      path: '/menu'
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
