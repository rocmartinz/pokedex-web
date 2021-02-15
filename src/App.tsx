import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Pokemons from './pages/pokemons/Pokemons';
import Pokemon from './pages/pokemon/Pokemon';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Pokemons />
      </Route>
      <Route path="/pokemon/:id">
        <Pokemon />
      </Route>
    </Switch>
  );
};

export default App;