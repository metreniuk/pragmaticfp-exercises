import React, { Fragment } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Use1 from "./1";
import Use2 from "./2";
import Use3 from "./3";
import Use4 from "./4";
import Use5 from "./5";
import Use6 from "./6";

const routes = [Use1, Use2, Use3, Use4, Use5, Use6].map((C, i, arr) => (
  <Route
    key={i}
    path={`/${i + 1}`}
    render={() => (
      <Fragment>
        {!!i && (
          <Link className="link left" to={`/${i}`}>
            {"<"}- Exercise {i}
          </Link>
        )}
        <C />
        {i + 1 !== arr.length && (
          <Link className="link right" to={`/${i + 2}`}>
            Exercise {i + 2} ->
          </Link>
        )}
      </Fragment>
    )}
  />
));

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <Fragment>
            <Use1 />
            <Link className="link right" to="2">
              Exercise 2 ->
            </Link>
          </Fragment>
        )}
      />
      {routes}
    </Switch>
  </BrowserRouter>
);

export default Root;
