import React, { Component } from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


import palestrantes from '../../palestrantes';
import Headers from '../../Headers';


class Api extends Component {

  state = {
    itens: [],
  }

  async componentDidMount() {
    const response = await palestrantes.get('');

    this.setState({ itens: response.data });
  }

  render() {

    const { itens } = this.state;

    return (
      <div>
        <Headers />
        <h1>Listar os Palestrantes</h1>
        {itens.map(itens => (
          
          <li key={itens.id_palestrante}>
            <Card>
               <CardImg top width="100%" src={itens.foto_palestrante} alt="Card image cap" />
              <CardBody>
                  <CardTitle>
                    <strong>Nome: </strong> {itens.nome_palestrante}
                  </CardTitle>
                  <CardText>
                              <p>
                                <span> Empresa : </span> {itens.empresa_palestrante}<br />
                                <span> Cargo : </span> {itens.cargo_palestrante}
                              </p>
                  </CardText>
              </CardBody>
            </Card>
          </li>
        ))}
      </div>
    );
  };
};



export default Api;
