import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./Components/NavTabs";
import PTest from "./Components/Test";
import RandomQuote from "./Components/quotes";
import CheckList from "./Components/checklist";
import Links from "./Components/links";
import SignIn from "./Components/signin";
import Splash from "./Components/splash";
import Snapshot from "./Components/Snapshot";
import ProfilePage from "./Components/Profile";

function Navigation() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" render={props => <div>
          <SignIn></SignIn>
          <Splash></Splash>
        </div>
        } />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/checklist" component={CheckList} />
        <Route exact path="/quotes" component={RandomQuote} />
        <Route exact path="/test" component={PTest} />
        <Route exact path="/snapshot" component={Snapshot} />
        <Route exact path="/links" component={Links} />
        

      </div>
    </Router>
  );
}

export default Navigation;
