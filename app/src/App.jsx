import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Styles/main.scss";
import "./Styles/card.scss";
import "./Styles/search.scss";
import Home from "./Components/Home/Home";
import NewsPage from "./Components/News/NewsPage";
import Header from "./Components/Header";
import About from "./Components/About/About";
import Page404 from "./Components/Page404/Page404";
import DetailsPage from "./Components/Details/DetailsPage";

function App() {
  return (
    <Router>
      <div className="App" data-testid="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:art_id" component={DetailsPage} />
          <Route path="/News/" component={NewsPage} />
          <Route path="/About/" component={About} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
