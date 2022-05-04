import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Title = styled.h1`
  color: #fff;
  margin: 3vh;
  margin-left: 6vw;
`;
const Img = styled.img`
  width: 300px;
`;

export default class Todos extends React.Component {
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

  render() {
    return (
      <Container>
        <Title>Todos</Title>
        {this.state.Filmes.map((item) => (
          <>
            <Img src={item.poster} alt="filmes" />
            <Img src={item.title} alt=" " />
          </>
        ))}
      </Container>
    );
  }
}
