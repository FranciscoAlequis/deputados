import React from 'react';
import './Navegation.css';
import {Link} from 'react-router-dom';
import { white } from 'ansi-colors';

function Navegation() {
    const style = {
        color: 'white',
        textDecoration: 'none'
    }
  return (
    <div className="Navegation">
      <nav>
          <h3>Logo</h3>
          <ul>
           <Link style={style} to="/About"><li>Sobre</li></Link>
           <Link style={style} to="/Deputados"><li>Deputados</li></Link>
          </ul>
      </nav>
    </div>
  );
}

export default Navegation;
