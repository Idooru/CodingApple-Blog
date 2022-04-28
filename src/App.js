/* eslint-disable */

import React, { useState } from "react";
import "./App.css";

function App() {
  const [title] = useState(["post1", "post2", "post3"]);
  const a = 5;
  return (
    <div className="App">
      <div className="black-nav">
        <p>개발 Blog</p>
      </div>
      <div className="list">
        <h3>
          {title[0]}
          <span onClick="">❤</span>
        </h3>
        <p>2022/4/28발행</p>
        <hr></hr>
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2022/4/28발행</p>
        <hr></hr>
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>2022/4/28발행</p>
        <hr></hr>
      </div>
    </div>
  );
}

export default App;
