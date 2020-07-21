import React, { memo } from "react";
import ReactDOM from "react-dom";
import Normalize from "react-normalize";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./App";
import Menu from "./Components/Header";

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
