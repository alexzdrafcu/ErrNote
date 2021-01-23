import React from "react";
import "./App.css";
import MainPage from './components/MainPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Form from "./components/Form";
import Index from "./components/Index";
import TestPg from "./components/TestPg"
function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route path="/testpg" exact component={TestPg} /> */}
          <Route path="/" exact component={Index} />
          <Route path="/signup" exact component={Form} />
          <Route path="/login" exact component={Login} />
          <Route path="/user/" component={MainPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
