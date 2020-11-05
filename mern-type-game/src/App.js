

import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component"
import ScoresList from "./components/score-list.component";
import Inst from "./components/instruction.component";
import CreateScore from "./components/create-score.component";
import CreateUser from "./components/create-user.component";
function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
    <br/>
    <Route path="/list" exact component={ScoresList} />
    <Route path="/inst" exact component={Inst} />
    <Route path="/create" component={CreateScore} />
    <Route path="/user" component={CreateUser} />
    </div>
  </Router>
  );
}

export default App;
