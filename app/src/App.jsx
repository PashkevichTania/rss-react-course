import React from 'react';

import './App.css';
import './Styles/main.scss';
import './Styles/card.scss';
import './Styles/search.scss';
import CardsList from './Components/CardsList';
import SearchBar from './Components/SearchBar';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <Form />
      <CardsList />
    </div>
  );
}

export default App;
