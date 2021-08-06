import React, { useState } from 'react';

import './Styles/main.scss';
import './Styles/card.scss';
import './Styles/search.scss';
import CardsList from './Components/CardsList';
import SearchBar from './Components/SearchBar';
import Form from './Components/Form';

function App() {
  const [cards, setCards] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <Form cards={cards} setCards={setCards} />
      <CardsList cards={cards} />
    </div>
  );
}

export default App;
