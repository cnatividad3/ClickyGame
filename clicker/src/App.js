import React, { Component } from 'react';
import logo from './logo.svg';
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
      occupation={characters[0].occupation}
      location={characters[0].location}
    />
    <CharacterCard
      name={characters[1].name}
      image={characters[1].image}
      occupation={characters[1].occupation}
      location={characters[1].location}
    />
    <CharacterCard
      name={characters[2].name}
      image={characters[2].image}
      occupation={characters[2].occupation}
      location={characters[2].location}
    />
  </Wrapper>
);

export default App;
