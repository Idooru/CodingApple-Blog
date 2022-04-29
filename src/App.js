/* eslint-disable */

import React, { useState } from "react";
import "./App.css";

function App() {
  const [postTitle, changePostTitle] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  const [thumb, changeThumb] = useState(0);

  function modifyTitle() {
    const newArray = [...postTitle];
    newArray[0] = "여자코트 추천";
    changePostTitle(newArray);
  }

  function sortTitleName() {
    const newArray = [...postTitle];
    newArray.sort();
    changePostTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <p>개발 Blog</p>
      </div>
      <div className="button-array">
        <button onClick={modifyTitle}>코트 변경</button>
        <button onClick={sortTitleName}>제목 정렬</button>
      </div>
      <div className="list">
        <h3>
          {postTitle[0]}
          <span
            onClick={() => {
              changeThumb(thumb + 1);
            }}
          >
            👍
          </span>
          {thumb}
        </h3>
        <p>2022/4/28발행</p>
        <Modal></Modal>
        <hr></hr>
      </div>
      <div className="list">
        <h3>{postTitle[1]}</h3>
        <p>2022/4/28발행</p>
        <Modal></Modal>
        <hr></hr>
      </div>
      <div className="list">
        <h3>{postTitle[2]}</h3>
        <p>2022/4/28발행</p>
        <Modal></Modal>
        <hr></hr>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
