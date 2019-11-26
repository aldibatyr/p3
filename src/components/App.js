import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import Main from "../pages/Main";
import Work from "../pages/Work";


export default function App() {
  return (
    <main className="main">
      <Header/>
      <Switch>
        <Route
          exact path={'/'}
          component={Main}
        />
        <Route
          path={'/work'}
          component={Work}
        />
      </Switch>
    </main>
  );
}
