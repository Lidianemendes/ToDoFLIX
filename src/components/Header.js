import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Header.css";
import Usuario from "./imagens/usuario.jpg";
import Seta from "./imagens/seta aixo.png";
import Todos from "./Todos";
import ToDo from "./ToDo";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:o;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  text-decoration:none;
  color:white;
}
`;
const Subtitle = styled.div`
  width: 34px;
  height: 15px;
  color: white;
  padding-right: 10vh;
`;
const Details = styled.div``;
const Menulist = styled.div`
  list-style: none;
  color: #fff;
`;
const Img = styled.img`
  padding-right: 1vh;
`;

const Category = styled.div`
top: 25px;
left: 241px;
width: 67px;
height: 15px;
padding-right:80vh;
font-size: 16px;
color: #fff;
&:hover{
  cursor: pointer;
  color:#e50914;
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
        <Router>
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
                    <Link to="/todos">Todos</Link>
                  </li>
                  <li>
                    <Link to="/favoritos">Favoritos</Link>
                  </li>
                  <li>
                    <Link to="/vistos">Já vistos</Link>
                  </li>
                  <li>
                    <Link to="/adicionados">Adicionados</Link>
                  </li>
                </Menulist>
                <Routes>
                  <Route path="/todos" element={<Todos />} />
                </Routes>
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
        </Router>
      </header>
    );
  }
}
