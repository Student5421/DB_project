import axios from "axios";
import "./App2.css";

import imgLogo from "./assets/logo.png";
import React, { useEffect, useState } from "react";

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

  const [foodData, setFoodData] = useState();
  const getFoodData = async () => {
    try {
      axios.get("/testdb/getAllFood").then((res) => {
        //console.log(res.data);
        setFoodData(res.data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getFoodData();
    console.log(JSON.stringify(foodData));
  }, []);

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
          <button className="search-button">검색</button>
        </div>
        <div className="search-results">
          <span>내용이 들어올 예정</span>
          {!foodData ? null : (
            <>
              {foodData.map((item) => (
                <li key={item.id}>
                  <img src={item.main_image} alt="Example Image" />
                  <p>음식 이름: {item.food_name}</p>
                  <p>음식 탄수화물: {item.carbohydrate}</p>
                  <p>음식 단백질: {item.protein}</p>
                  <p>음식 지방: {item.province}</p>
                  <p>음식 나트륨: {item.salt}</p>
                  <p>
                    조리 방법: {item.cooking_method1} {item.cooking_method2}{" "}
                    {item.cooking_method3}
                    {item.cooking_method4}
                    {item.cooking_method5}
                    {item.cooking_method6}
                    {item.cooking_method7}
                    {item.cooking_method8}
                    {item.cooking_method9}
                    {item.cooking_method10}
                    {item.cooking_method11}
                    {item.cooking_method12}
                    {item.cooking_method13}
                    {item.cooking_method14}
                    {item.cooking_method15}
                    {item.cooking_method16}
                    {item.cooking_method17}
                    {item.cooking_method18}
                    {item.cooking_metho19}
                    {item.cooking_method20}
                  </p>
                </li>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
