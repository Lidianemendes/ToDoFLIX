import React, { Component } from "react";
import styled from "styled-components";
import Pesquisa from "./imagens/pesquisa.png";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
`;
const Input = styled.input`
  padding-right: 17vh;
  top: 17px;
  left: 830px;
  width: 350px;
  height: 32px;
  background: #2c2c2c 0% 0% no-repeat padding-box;
  border-radius: 4px;
`;

class App extends Component {
  state = {
    Filmes: "",
    FilmesPesquisados: []
  };

  add = (event) => {
    const { Filmes, FilmesPesquisados } = this.state;

    event.preventDefault();

    if (Filmes === "") return;

    const newTask = {
      id: Date.now(),
      text: Filmes
    };

    this.setState({
      FilmesPesquisados: FilmesPesquisados.concat(newTask),
      Filmes: ""
    }),
      console.log(this.state.FilmesPesquisados);
  };

  handleChange = (event) => {
    this.setState({
      Filmes: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.add}>
          <Input
            onChange={this.handleChange}
            value={this.state.Filmes}
            Img
            src={Pesquisa}
            alt=""
            Search
            type="text"
            placeholder="Pesquisar"
          />
          <ul>
            {this.state.FilmesPesquisados.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}

export default App;
