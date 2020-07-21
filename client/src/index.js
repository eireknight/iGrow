import React, { memo } from "react";
import ReactDOM from "react-dom";
import Normalize from "react-normalize";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import "./Components/signin";
import Navigation from "./App";
import Menu from "./Components/Header";
import registerServiceWorker from "./registerServiceWorker";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const App = memo(props => {
  return (
    <React.Fragment>
      <Normalize />
      <Menu />
      <Navigation />
    </React.Fragment>
  );
});

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker;