import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

//modified this card to be friend card for each character
import CharacterCard from "./components/CharacterCard";

//import friends.json
import characters from "./characters.json";


//each friend detail now called with friends.json through array
const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <CharacterCard
      name={friends[0].name}
      image={friends[0].image}
      occupation={friends[0].occupation}
      location={friends[0].location}
    />
    <CharacterCard
      name={friends[1].name}
      image={friends[1].image}
      occupation={friends[1].occupation}
      location={friends[1].location}
    />
    <CharacterCard
      name={friends[2].name}
      image={friends[2].image}
      occupation={friends[2].occupation}
      location={friends[2].location}
    />
  </Wrapper>
);

export default App;
