import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Shopping extends Component{
    
    state = {
        dados: []
    }

    componentDidMount() {
        axios.get('https://dadosabertos.camara.leg.br/api/v2/partidos/').then(res => {
            console.log(res);
            this.setState({dados: res.data.dados});
        })
    }
    
    render() {
        return(
            <div className="Shopping">
             
            </div>
        );
    }     
}

export default Shopping;
