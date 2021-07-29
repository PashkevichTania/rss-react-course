import React from 'react';

import './App.css';
import './Styles/main.css';
import './Styles/card.scss';
import './Styles/search.scss';
import CardsList from './Components/CardsList';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <CardsList />
    </div>
  );
}

export default App;
