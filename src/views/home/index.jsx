import React, { memo, useEffect, useState } from "react";

import { getHighScoreData } from "@/services/module/home";

const Home = memo(() => {
  const [highScore, setHighScore] = useState({});

  useEffect(() => {
    getHighScoreData().then((res) => {
      setHighScore(res);
    });
  }, []);

  return (
    <div>
      <h3>Home Page</h3>
      <h5>{highScore.title}</h5>
      <ul>
        {highScore.list?.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});

export default Home;
