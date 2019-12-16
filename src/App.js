import React, { useState } from 'react';
import { ApolloProvider } from 'react-apollo';
import styled, { ThemeProvider } from 'styled-components';
import client from './graphql';
import PokemonSelector from './pokemon/pokemonSelector/PokemonSelector';
import colors from './styles/colors';
import PokemonDetail from './pokemon/pokemonDetail/PokemonDetail';
import PokemonSquad from './pokemon/pokemonSquad/PokemonSquad';
import translations from './translations/translations';

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 200px;
`;

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;

  main {
    margin-top: 2rem;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 30% 70%;
    grid-template-areas: 'pokemonselector pokemondetail' 'pokemonsquad pokemonsquad';
  }
`;

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [squad, setSquad] = useState([]);

  const addToSquad = pokemon => {
    if (squad.length < 6) {
      setSquad([...squad, pokemon]);
    }
  };

  const removeFromSquad = squadIndex => {
    const newSquad = [...squad];
    newSquad.splice(squadIndex, 1);
    setSquad(newSquad);
  };

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={{ colors }}>
        <Container>
          <Logo
            src="https://vignette.wikia.nocookie.net/logopedia/images/2/2b/Pokemon_2D_logo.svg/revision/latest/scale-to-width-down/639?cb=20170115063554"
            alt={translations.getLabel('POKEMON')}
          />
          <main>
            <PokemonSelector onSelect={setSelectedPokemon} />
            <PokemonDetail selectedPokemon={selectedPokemon} savePokemon={addToSquad} />
            <PokemonSquad squad={squad} removeMember={removeFromSquad} />
          </main>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
