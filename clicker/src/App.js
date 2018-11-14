import React, { Component } from 'react';
import "./App.css";

//modified this card to be friend card for each character
import CharacterCard from "./components/CharacterCard";

//import characters.json
import characters from "./characters.json";

class App extends Component {
  state = {
    characters: characters,
    selected: [],
    score: 0,
    highscore: 0
  };

  handleCharacterShuff = () => {
    const characterShuffled = [...this.state.characters];

    characterShuffled.sort(function (a, b) {
      return 0.5 - Math.random();
    });

    this.setState({ characters: characterShuffled });
  };

  handleCharacterSel = id => {
    const characterSelected = [...this.state.selected];

    if (!characterSelected.includes(id)) {
      characterSelected.push(id);

      this.handleCharacterShuff();
      this.setState((prevState, props) => {
        return {
          selected: characterSelected,
          score: prevState.score + 1,
          highscore:
            prevState.highscore > prevState.score + 1
              ? prevState.highscore
              : prevState.score + 1
        };
      });
    } else {
      this.handleCharacterShuff();
      this.setState({
        selected: [],
        score: 0
      });
    }
  };

  render() {
    return (
      <div className="container text-center">
        <h1>Avengers Clicky Game</h1>
        <h2>
          Your Score: <span>{this.state.score}</span> Highscore:{" "}
          <span>{this.state.highscore}</span>
        </h2>
        <h3>Click to begin.. Dont click any hero more than once!</h3>
        <div className="wrapper">
          {this.state.characters.map((hero, i) => (
            <CharacterCard
              key={hero.id}
              id={hero.id}
              image={hero.image}
              alt={hero.name}
              handleCharacterSel={this.handleCharacterSel}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;