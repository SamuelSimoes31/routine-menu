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
    let obj = [{
      nome: 'Seus Objetos',
      icon: 'key'
      path: '/menu'
    },
    {
      nome: 'Pessoas',
      icon: 'user'
    },
    {
      nome: 'Remédios',
      icon: 'medicine-box'
    },
    {
      nome: 'Rotina',
      icon: 'clock-circle'
    },
    {
      nome: 'item2',
      icon: 'icon2'
    },
    {
      nome: 'item2',
      icon: 'icon2'
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
