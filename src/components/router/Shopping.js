import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Shopping extends Component{
    state = {
        dados: []
    }

    componentDidMount() {
        axios.get('https://dadosabertos.camara.leg.br/api/v2/deputados').then(res => {
            console.log(res);
            this.setState({dados: res.data.dados});
        })
    }
    render() {
        return(
            <div className="Shopping">
                <h1>Deputados</h1>
                {this.state.dados.map((dado) => (
                    <div>
                        <p>{dado.nome}</p>
                        <p key={dado.id}><Link to="/Shopping/${dado.id}">{dado.uriPartido}</Link></p>
                    </div>
                ))}
            </div>
        );
    }     
}

export default Shopping;
