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

  const [rice, setRice] = useState(false);
  const [side, setSide] = useState(false);
  const [soup, setSoup] = useState(false);
  const [dessert, setDessert] = useState(false);
  const [selectFoodData, setSelectFoodData] = useState();
  const buttonData = async () => {
    var one = false;
    var two = false;
    var three = false;
    var four = false;
    console.log(
      "버튼상태=>" +
        buttonState.button1 +
        buttonState.button2 +
        buttonState.button3 +
        buttonState.button4
    );

    if (buttonState.button1) {
      one = true;
    } else {
      one = false;
    }
    if (buttonState.button2) {
      two = true;
    } else {
      two = false;
    }
    if (buttonState.button3) {
      three = true;
    } else {
      three = false;
    }
    if (buttonState.button4) {
      four = true;
    } else {
      four = false;
    }

    //console.log("음식적용테스트 =>" + rice + side + soup + dessert);
    console.log("음식적용테스트 =>" + one + two + three + four);

    try {
      // Axios를 사용하여 Node.js로 데이터 전송
      const response = await axios.post("/testdb/selectFoodData", {
        one,
        two,
        three,
        four,
        hydrate,
        hydrate2,
        protein,
        protein2,
        province,
        province2,
        salt,
        salt2,
        calorie,
        calorie2,
      });

      setSelectFoodData(response.data); // Node.js에서 받은 데이터를 상태에 저장
      //console.log(JSON.stringify(response.data[0].category));
      setFoodData(null);
      setFoodData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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

  const [hydrate, setHydrate] = useState(0);
  const [protein, setProtein] = useState(0);
  const [province, setProvince] = useState(0);
  const [salt, setSalt] = useState(0);
  const [calorie, setCalorie] = useState(0);
  const [hydrate2, setHydrate2] = useState(0);
  const [protein2, setProtein2] = useState(0);
  const [province2, setProvince2] = useState(0);
  const [salt2, setSalt2] = useState(0);
  const [calorie2, setCalorie2] = useState(0);

  const changeHydrate = (e) => {
    setHydrate(e.target.value);
  };

  const changeHydrate2 = (e) => {
    setHydrate2(e.target.value);
  };

  const changeProtein = (e) => {
    setProtein(e.target.value);
    console.log(protein);
  };

  const changeProtein2 = (e) => {
    setProtein2(e.target.value);
  };

  const changeProvince = (e) => {
    setProvince(e.target.value);
  };

  const changeProvince2 = (e) => {
    setProvince2(e.target.value);
  };
  const changeSalt = (e) => {
    setSalt(e.target.value);
  };

  const changeSalt2 = (e) => {
    setSalt2(e.target.value);
  };
  const changeCalorie = (e) => {
    setCalorie(e.target.value);
  };

  const changeCalorie2 = (e) => {
    setCalorie2(e.target.value);
  };

  const [searchData, setSearchData] = useState("");

  const searchChange = (e) => {
    setSearchData(e.target.value);
  };

  const dataSearch = async () => {
    try {
      // Axios를 사용하여 Node.js로 데이터 전송
      const response = await axios.post("/testdb/searchFoodData", {
        searchData,
      });

      //setSelectFoodData(response.data); // Node.js에서 받은 데이터를 상태에 저장
      //console.log(JSON.stringify(response.data[0].category));
      setFoodData(null);
      setFoodData(response.data);
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
          onChange={searchChange}
        />
        <button className="search-button2" onClick={dataSearch}>
          검색
        </button>
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
                onChange={changeHydrate}
              />
              <span>이상</span>
              <input
                type="text"
                id="carbohydrate"
                name="carbohydrate"
                placeholder="0"
                onChange={changeHydrate2}
              />
              <span>이하</span>
            </div>
            <div className="prompt">
              <label for="protein" className="pro">
                단백질
              </label>
              <input
                type="text"
                id="protein"
                name="protein"
                placeholder="0"
                onChange={changeProtein}
              />
              <span>이상</span>
              <input
                type="text"
                id="protein"
                name="protein"
                placeholder="0"
                onChange={changeProtein2}
              />
              <span>이하</span>
            </div>
            <div className="prompt">
              <label for="lipid" className="lip">
                지방
              </label>
              <input
                type="text"
                id="lipid"
                name="lipid"
                placeholder="0"
                onChange={changeProvince}
              />
              <span>이상</span>
              <input
                type="text"
                id="lipid"
                nam="lipid"
                placeholder="0"
                onChange={changeProvince2}
              />
              <span>이하</span>
            </div>
            <div className="prompt">
              <label for="sodium" className="sod">
                나트륨
              </label>
              <input
                type="text"
                id="sodium"
                name="sodium"
                placeholder="0"
                onChange={changeSalt}
              />
              <span>이상</span>
              <input
                type="text"
                id="sodium"
                name="sodium"
                placeholder="0"
                onChange={changeSalt2}
              />
              <span>이하</span>
            </div>
            <div className="prompt">
              <label for="calorie" className="cal">
                열량
              </label>
              <input
                type="text"
                id="calorie"
                name="calorie"
                placeholder="0"
                onChange={changeCalorie}
              />
              <span>이상</span>
              <input
                type="text"
                id="calorie"
                name="calorie"
                placeholder="0"
                onChange={changeCalorie2}
              />
              <span>이하</span>
            </div>
          </div>
          <button className="search-button" onClick={buttonData}>
            검색
          </button>
        </div>
        <div className="search-results">
          {!foodData ? null : (
            <div className="content-box">
              {foodData.map((item) => (
                <div className="content-detail" key={item.id}>
                  <h3>{item.food_name}</h3>
                  <div className="block">
                    <div className="food">
                      <img src={item.main_image} alt="Example Image" />
                    </div>
                    <div className="info">
                      <span>재료 : {item.ingredient}</span>
                      <span>탄수화물 : {item.carbohydrate}</span>
                      <span>단백질 : {item.protein}</span>
                      <span>지방 : {item.province}</span>
                      <span>나트륨 : {item.salt}</span>
                      <span>열량 : {item.calorie}</span>
                    </div>
                  </div>
                  <li>
                    <p>{item.cooking_method1}</p>
                    <p>{item.cooking_method2}</p>
                    <p>{item.cooking_method3}</p>
                    <p>{item.cooking_method4}</p>
                    <p>{item.cooking_method5}</p>
                    <p>{item.cooking_method6}</p>
                    <p>{item.cooking_method7}</p>
                    <p>{item.cooking_method8}</p>
                    <p>{item.cooking_method9}</p>
                    <p>{item.cooking_method10}</p>
                    <p>{item.cooking_method11}</p>
                    <p>{item.cooking_method12}</p>
                    <p>{item.cooking_method13}</p>
                    <p>{item.cooking_method14}</p>
                    <p>{item.cooking_method15}</p>
                    <p>{item.cooking_method16}</p>
                    <p>{item.cooking_method17}</p>
                    <p>{item.cooking_method18}</p>
                    <p>{item.cooking_method19}</p>
                    <p>{item.cooking_method20}</p>
                  </li>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

/*

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

*/
