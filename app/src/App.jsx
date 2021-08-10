import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Styles/main.scss';
import './Styles/card.scss';
import './Styles/search.scss';
import Home from './Components/Home/Home';
import NewsPage from './Components/News/NewsPage';
import Header from './Components/Header';
import About from './Components/About/About';
import Page404 from './Components/Page404/Page404';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/News/" component={NewsPage} />
          <Route path="/About/" component={About} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
