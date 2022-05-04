import React from "react";
import Carousel from "nuka-carousel";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import "./Movies.css";
import Hedgehog from "./imagens/sonic2ofilme.jpg";
import { createGlobalStyle } from "styled-components";
import coracao from "./imagens/coracao.png";
import valeu from "./imagens/valeu.png";
const GlobalStyle = createGlobalStyle`
*{
  margin:o;
  padding:0;
  box-sizing:border-box;
  color:white;
}
`;
const Container = styled.div`
  width: 100%;
  height: 53vh;
  padding-top: 15vh;
`;
const Starimg = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2vw;
  padding-top: 6vh;
  height: 35vh;
`;
const MainImg = styled.img`
  width: 25%;
  border-radius: 10px;
  box-shadow: inset 0 0 1em gold, 0 0 1em red;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Title = styled.h4`
  color: #fff;
`;
const MainSinopse = styled.div``;
const Sinopse = styled.p`
  color: #fff;
  font-size: 12px;
  text-align: left;
`;
const Inform = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 34vw;
  position: relative;
  bottom: 30vh;
`;
const Heart = styled.svg`
  &:hover {
    cursor: pointer;
  }
`;
const RecentlySeen = styled.p`
  color: #fff;
  font-weight: 500;
`;
const MainTitle = styled.h2`
  color: #fff;
  font-size: 35px;
`;
const Over = styled.p`
  color: #fff;
  width: 30vw;
`;
const Starcarousel = styled.div`
  background-color: red;
  margin-top: 6vh;
  height: 100%;
`;
const Img = styled.img`
  width: 250px;
  height: 147px;
  border-radius: 10px;
  box-shadow: inset 0 0 1em gold, 0 0 1em red;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
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
  size: 16,
  count: 1,
  char: "4/5 ♡",
  activeColor: "#00CD00",
  color: "white",
  a11y: true
};

const info3 = {
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
        <Starimg>
          <MainImg src={Hedgehog} alt="Hedgehog" />
          <Inform>
            <Heart
              id="coracao"
              data-name="coracao"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              viewBox="0 0 21 22"
            >
              <ellipse
                id="Ellipse_8"
                data-name="Ellipse 8"
                cx="10.5"
                cy="11"
                rx="10.5"
                ry="11"
                fill="#717171"
              />
              <path
                id="Path_407"
                data-name="Path 407"
                d="M865.16-1403.7l-.893-.813c-3.172-2.877-5.266-4.774-5.266-7.1a3.355,3.355,0,0,1,3.388-3.388,3.689,3.689,0,0,1,2.772,1.287,3.689,3.689,0,0,1,2.772-1.287,3.355,3.355,0,0,1,3.388,3.388c0,2.328-2.094,4.225-5.267,7.108Z"
                transform="translate(-854.5 1421)"
                fill="#b1b1b1"
              />
            </Heart>
            <RecentlySeen>Visto recentemente</RecentlySeen>
            <MainTitle>Sonic 2</MainTitle>
            <Over>
              Sonic se estabeleceu em Green Hills e está pronto para ter mais
              liberdade, mas seus planos são modificados quando Dr. Robotnik
              retorna, desta vez com um novo parceiro, Knuckles. Sonic também
              não está sozinho, ele se junta a Tails e eles embarcam em uma
              jornada para impedir o vilão..
            </Over>
            <ReactStars {...info3} />
          </Inform>
        </Starimg>
        <Starcarousel>
          <Carousel
            slidesToShow={5}
            cellAlign={"left"}
            disableEdgeSwiping={true}
            wrapAround={true}
            autoplay={true}
          >
            {this.state.Filmes.map((item) => (
              <>
                <Img src={item.poster} alt="Capa" />
                <Heart
                  id="coracao"
                  data-name="coracao"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                >
                  <ellipse
                    id="Ellipse_8"
                    data-name="Ellipse 8"
                    cx="10.5"
                    cy="11"
                    rx="10.5"
                    ry="11"
                    fill="#717171"
                  />
                  <path
                    id="Path_407"
                    data-name="Path 407"
                    d="M865.16-1403.7l-.893-.813c-3.172-2.877-5.266-4.774-5.266-7.1a3.355,3.355,0,0,1,3.388-3.388,3.689,3.689,0,0,1,2.772,1.287,3.689,3.689,0,0,1,2.772-1.287,3.355,3.355,0,0,1,3.388,3.388c0,2.328-2.094,4.225-5.267,7.108Z"
                    transform="translate(-854.5 1421)"
                    fill="#b1b1b1"
                  />
                </Heart>
                <Title>{item.Title}</Title>
                <ReactStars {...info1} />
                <MainSinopse>
                  <Sinopse>{item.descrição}</Sinopse>
                </MainSinopse>
              </>
            ))}
          </Carousel>
        </Starcarousel>
      </Container>
    );
  }
}
//render() {
// return (
//  <Container>
//  {this.state.Filmes.map((item) => (
//  <div className="star--main">
// <StarTwo>
// <Img src={item.poster} alt="capa" />
// <h2>
//   {item.Title} <ReactStars {...info} />
// </h2>
// <p>{item.descrição}</p>
// <ReactStars {...info1} />
//</StarTwo>
//</div>
// ))}
// </Container>
// );
// }
//}
