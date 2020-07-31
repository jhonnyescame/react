import React, { Component } from 'react';

import api from '../../api';
import Headers from '../../Headers';


class Api extends Component{

  state = {
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('star%20wars');

    this.setState({ filmes: response.data });
  }

  render() {

    const { filmes } = this.state;

    return (
      <div>
        <Headers />
        <h1>Listar os Filmes</h1>
        {filmes.map(filme => (
          <li key={filme.show.id}>
            {filme.show.premiered}
            <h2>
              <strong>Título: </strong>
              {filme.show.name}
            </h2>
            <p>
              {filme.show.url}
            </p>

          </li>
        ))}
      </div>
    );
  };
};



export default Api;
