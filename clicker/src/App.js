import React, { Component } from 'react';
import './App.css';
import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

//modified this card to be friend card for each character
import CharacterCard from "./components/CharacterCard";

//import characters.json
import characters from "./characters.json";


//each friend detail now called with characters.json through array
const App = () => (
  <Wrapper>
    <Title>Characters List</Title>
    <CharacterCard
      name={characters[0].name}
      image={characters[0].image}
    />
    <CharacterCard
      name={characters[1].name}
      image={characters[1].image}
    />
    <CharacterCard
      name={characters[2].name}
      image={characters[2].image}
    />
    <CharacterCard
      name={characters[3].name}
      image={characters[3].image}
    />
    <CharacterCard
      name={characters[4].name}
      image={characters[4].image}
    />
     <CharacterCard
      name={characters[5].name}
      image={characters[5].image}
    />
     <CharacterCard
      name={characters[6].name}
      image={characters[6].image}
    />
     <CharacterCard
      name={characters[7].name}
      image={characters[7].image}
    />
     <CharacterCard
      name={characters[8].name}
      image={characters[8].image}
    />
  </Wrapper>
);

export default App;
