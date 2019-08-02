import React from 'react';
import { Input, Tooltip, Icon, Button} from 'antd';
import 'antd/es/date-picker/style/css';
import './FormatoItem.css'
import { Link } from 'react-router-dom'

class FormatoItem extends React.Component{

  render(){
     const { nome, parentesco, imgURL} = this.props
    return(

        <div className = "Item" > 
              <div className = "DivObj">
                <img className="Pessoa" src={imgURL} />
                {nome}
                <br/>
                <div className='Descricao'>{parentesco}</div>
              </div>
        </div>

    );
  }

}

export default FormatoItem;