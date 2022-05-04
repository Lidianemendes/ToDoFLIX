import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Header.css";
import Usuario from "./imagens/usuario.jpg";
import Seta from "./imagens/seta aixo.png";
import ToDo from "./ToDo";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:o;
  padding:0;
  box-sizing:border-box;
  text-decoration:none;
  color:white;
  background-color:black;
}
`;
const Subtitle = styled.div`
  width: 34px;
  height: 15px;
  color: white;
  padding-right: 10vh;
  &:hover{
    cursor: pointer;
    color: #E71B27;
`;
const Details = styled.div``;
const Menulist = styled.div`
  list-style: none;
  color: #fff;
`;
const Img = styled.img`
  width: 2vw;
  height: 5vh;
  margin-right: 1.5vw;
  border-radius:5px;  
  &:hover {
    cursor: pointer;
    color: #e50914;
`;

const Category = styled.div`
  width: 67px;
  height: 15px;
  padding-right: 80vh;
  font-size: 16px;
  color: #fff;
  &:hover {
    cursor: pointer;
    color: #e50914;
  }
`;
const Linking = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #e71b27;
  }
`;
export default class Header extends React.Component {
  state = {
    modalcategoria: false
  };

  listOpen = () => {
    this.setState({ modalcategoria: !this.state.modalcategoria });
  };

  render() {
    return (
      <header>
        <GlobalStyle />
        <nav>
          <div className="Menu">
            <h1>TODOFLIX</h1>
            <Link to="/">
              <Subtitle>Inicio</Subtitle>
            </Link>
            <Details>
              <Category onClick={this.listOpen}>
                Categorias <span>&#9663;</span>
              </Category>
              <Menulist>
                <li>
                  <Linking to="/Todos">Todos</Linking>
                </li>
                <li>
                  <Linking to="/favoritos">Favoritos</Linking>
                </li>
                <li>
                  <Linking to="/vistos">Já vistos</Linking>
                </li>
                <li>
                  <Linking to="/adicionados">Adicionados</Linking>
                </li>
              </Menulist>
            </Details>
          </div>
        </nav>
        <button>Adicionar filmes</button>
        <ToDo />
        <div className="user">
          <Img src={Usuario} alt="UserIcon" />
        </div>
        <div className="seta">
          <Img src={Seta} alt="setaBaixo" />
        </div>
      </header>
    );
  }
}
