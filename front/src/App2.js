import "./App2.css";

import imgLogo from "./assets/logo.png";
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [buttonState, setButtonState] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
  });

  const handleButtonClick = (value) => {
    setResult(value);
    console.log(buttonState);
  };

  const toggleButton = (button) => {
    setButtonState((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));
  };

  return (
    <div>
      <div className="top">
        <img src={imgLogo} />
        <h1>단웅셰프</h1>
      </div>
      <div className="search-prompt">
        <input
          type="text"
          placeholder="원하는 재료를 검색해주세요."
          className="search-input"
        />
        <img src="" />
      </div>
      <div className="contents-container">
        <div className="filter-container">
          <h4>카테고리</h4>
          <button
            onClick={() => {
              handleButtonClick("결과 1");
              toggleButton("button1");
            }}
            className={buttonState.button1 ? "activeButton" : "inactiveButton"}
          >
            밥
          </button>
          <button
            onClick={() => {
              handleButtonClick("결과 2");
              toggleButton("button2");
            }}
            className={buttonState.button2 ? "activeButton" : "inactiveButton"}
          >
            반찬
          </button>
          <button
            onClick={() => {
              handleButtonClick("결과 3");
              toggleButton("button3");
            }}
            className={buttonState.button3 ? "activeButton" : "inactiveButton"}
          >
            국
          </button>
          <button
            onClick={() => {
              handleButtonClick("결과 4");
              toggleButton("button4");
            }}
            className={buttonState.button4 ? "activeButton" : "inactiveButton"}
          >
            후식
          </button>
          <h4>영양 성분</h4>
          <div className="nutrient-filter">
            <div className="prompt">
              <label for="carbohydrate" className="car">
                탄수화물
              </label>
              <input
                type="text"
                id="carbohydrate"
                name="carbohydrate"
                placeholder="0"
              />
              <span>이상</span>
              <input
                type="text"
                id="carbohydrate"
                name="carbohydrate"
                placeholder="0"
              />
              <span>이하</span>
            </div>
            <div className="prompt">
              <label for="protein" className="pro">
                단백질
              </label>
              <input type="text" id="protein" name="protein" placeholder="0" />
              <span>이상</span>
              <input type="text" id="protein" name="protein" placeholder="0" />
              <span>이하</span>
            </div>
            <div className="prompt">
              <label for="lipid" className="lip">
                지방
              </label>
              <input type="text" id="lipid" name="lipid" placeholder="0" />
              <span>이상</span>
              <input type="text" id="lipid" nam="lipid" placeholder="0" />
              <span>이하</span>
            </div>
            <div className="prompt">
              <label for="sodium" className="sod">
                나트륨
              </label>
              <input type="text" id="sodium" name="sodium" placeholder="0" />
              <span>이상</span>
              <input type="text" id="sodium" name="sodium" placeholder="0" />
              <span>이하</span>
            </div>
          </div>
        </div>
        <div className="search-results">
          <span>내용이 들어올 예정</span>
        </div>
      </div>
    </div>
  );
}

export default App;
