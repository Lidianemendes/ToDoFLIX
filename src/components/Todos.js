import React from "react";

export default class Todos extends React.Component {
  state = {
    Filmes: []
  };

  render() {
    return (
      <div>
        {this.state.Filmes.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    );
  }
}