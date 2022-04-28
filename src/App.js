import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import ReactStars from "react-rating-stars-component";
import Header from "./components/Header.js";
import "./App.css";

const GlobalStyle = createGlobalStyle`
*{
  margin:o;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  text-decoration:none;
  color:white;
}
`
const Container = styled.div`
  background-color: black;
  color: white;
  padding: 0;
  box-sizing: border-box;
  display:flex;
  flex-wrap:wrap;
`;

const Img = styled.img`
  width: 370px;
  height: 253.351px;
  margin: 0px;
  transform: scale(0.9);
  transition: all ease 0.2s;
  cursor: pointer;
`;

const info = {
  isHalf: true,
  size: 25,
  count: 1,
  char: "♡",
  activeColor: "red",
  color: "white",
  a11y: true
};

const info1 = {
  isHalf: true,
  size: 17,
  count: 1,
  char: "4/5 ♡",
  activeColor: "#00CD00",
  color: "white",
  a11y: true
};

export default class App extends React.Component {
  state = {
    Filmes: [
      {
        id: 1,
        Title: "Capitão Fantástico",
        descrição:
          "Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.",
        poster:
          "https://quartaparedepop.com.br/wp-content/uploads/2018/02/capit%C3%A3o-fantastico-752x440.jpg",
        isVistoRecentemente: true,
        isFavorito: true,
        isAssistido: true,
        stars: 4 / 5
      },
      {
        id: 2,
        Title: "Shrek",
        descrição:
          "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão",
        poster:
          "https://cdn.falauniversidades.com.br/wp-content/uploads/2021/04/22164821/shrek-1.jpg",
        isVistoRecentemente: true,
        isFavorito: true,
        isAssistido: true,
        stars: 4 / 5
      },
      {
        id: 3,
        Title: "Hoje eu quero voltar sozinho",
        descrição:
          "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
        poster:
          "https://www.hollywoodreporter.com/wp-content/uploads/2014/02/HojeEuQueroVoltarSozinho.jpg",
        isVistoRecentemente: true,
        isFavorito: true,
        isAssistido: true,
        stars: 4
      },
      {
        id: 4,
        Title: "Spider-Man",
        descrição:
          "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
        poster:
          "https://media.gq.com/photos/5c98e7b8e92bfc0c0bee9ed6/16:9/w_2560%2Cc_limit/Spider-Man-Into-the-Spider-Verse-blu-ray-gq.jpg",
        isVistoRecentemente: true,
        isFavorito: true,
        isAssistido: true,
        stars: 3 / 5
      },
      {
        id: 5,
        Title: "Um sonho de liberdade",
        descrição:
          "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
        poster:
          "http://proximonivel.pt/wp-content/uploads/2014/05/condenados-de-shawshank-ana-pn-img2.jpg",
        isVistoRecentemente: true,
        isFavorito: true,
        isAssistido: true,
        stars: 4 / 5
      },
      {
        id: 6,
        Title: "Que horas ela volta?",
        descrição:
          "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
        poster:
          "https://i.pinimg.com/564x/0c/94/d6/0c94d6c1f1fa0528dc3b7e22df6562c0--ems.jpg",
        isVistoRecentemente: true,
        isFavorito: true,
        isAssistido: true,
        stars: 0
      }
    ]
  };
  Filmeslist: [];
  FilmesPesquisados: [];

  handleClick(id) {
    this.setState({
      isVistoRecentemente: !this.state.isVistoRecentemente
    });
  }

  render() {
    return (
      <Container>
        <Header />
        {this.state.Filmes.map((item) => (
          <div className="star--main">
            <Img src={item.poster} alt="capa" />
            <h2>
              {item.Title} <ReactStars {...info} />
            </h2>
            <p>{item.descrição}</p>
            <ReactStars {...info1} />
          </div>
        ))}
      </Container>
    );
  }
}
