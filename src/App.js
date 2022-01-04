import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotPound from "./components/PageNotPound/PageNotPound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import PageNotPound from "./components/PageNotPound/PageNotPound";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <div className="container">
        <Switch>
        <Route path="/"  exact component={Home}/>
        <Route path="/movie/:imdbID" component={MovieDetail}></Route>
        <Route component={PageNotPound}></Route>
        </Switch>
        </div>
        
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
