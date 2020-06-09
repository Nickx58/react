import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Todo from "./components/Todo";
import ReduxBlog from "./reduxBlog/App";
import AppHooks from "./AppHooks";
import SongRedux from "./reduxComponents/app";

function RouteHome() {
  return (
    <>
      <BrowserRouter>
        <>
          <Route path="/" exact component={Home} />
          <Route path="/react-prep" component={App} />
          <Route path="/todos" component={Todo} />
          <Route path="/redux-blog" component={ReduxBlog} />
          <Route path="/hooks" component={AppHooks} />
          <Route path="/redux" component={SongRedux} />
        </>
      </BrowserRouter>
    </>
  );
}

export default RouteHome;
