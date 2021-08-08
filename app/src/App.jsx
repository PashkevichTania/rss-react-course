import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Styles/main.scss';
import './Styles/card.scss';
import './Styles/search.scss';
import Home from './Components/Home';
import NewsPage from './Components/NewsPage';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/News/" component={NewsPage} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
