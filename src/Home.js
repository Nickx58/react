import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Component</h1>
      <Link to="/react-prep">React Leasons</Link>
      <br />
      <Link to="/todos">Todo APP</Link>
      <br />
      <Link to="/redux-blog">Redux Blog</Link>
      <br />
      <Link to="/hooks">React Hooks</Link>
      <br />
      <Link to="/redux">Redux APP</Link>
    </div>
  );
}

export default Home;
