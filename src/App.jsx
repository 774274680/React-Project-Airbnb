import React, { memo } from "react";
import { NavLink, useRoutes } from "react-router-dom";
import routes from "./router";

const App = memo(() => {
  return (
    <div>
      <div className="nav">
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/about">关于</NavLink>
      </div>
      {useRoutes(routes)}
    </div>
  );
});

export default App;
