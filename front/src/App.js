import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App2 from "./App2.js";

/* e2b225c8d29b4f789e3e api 키*/

function App() {
  const [testData, setTestData] = useState();
  const getApi = async () => {
    axios.get("/api").then((res) => console.log(res.data));
  };
  const getTestdb = async () => {
    axios.get("/testdb").then((res) => {
      console.log(res.data);
      setTestData(res.data);
    });
  };
  useEffect(() => {
    // OpenAPI에서 데이터 가져오기

    // http://openapi.foodsafetykorea.go.kr/api/sample/COOKRCP01/xml/1/5/RCP_NM=값 &RCP_PARTS_DTLS=값 &CHNG_DT=값 &RCP_PAT2=값
    /* e2b225c8d29b4f789e3e api 키*/
    const apiUrl =
      "http://openapi.foodsafetykorea.go.kr/api/e2b225c8d29b4f789e3e/COOKRCP01/json/1/100";
    async function fetchData() {
      try {
        console.log("데이터 받아오는중");
        const response = await axios.get(apiUrl);

        // 여기서 데이터를 사용하거나 반환합니다.

        const data = response.data;
        setApiData(data.COOKRCP01.row);
        setData(data.COOKRCP01.row);
        console.log(data.COOKRCP01.row);
        console.log(data.COOKRCP01.row.length + "개의 데이터");
      } catch (error) {
        // 에러 처리
        console.error("Error fetching data:", error.message);
      }
    }

    getApi();
    getTestdb();
    fetchData();
  }, []);

  const [apiData, setApiData] = useState();
  const [dataFromServer, setDataFromServer] = useState();
  const [data, setData] = useState();
  const setFoodTable = async () => {
    try {
      // POST 요청을 보낼 때는 axios.post를 사용합니다.
      console.log("전달할것=>" + JSON.stringify(data));
      await axios.post("/testdb/postDataFood", data);
      // 서버로부터 받은 데이터를 상태에 설정
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };
  const setRecipeTable = async () => {
    try {
      // POST 요청을 보낼 때는 axios.post를 사용합니다.
      console.log("전달할것=>" + JSON.stringify(data));
      await axios.post("/testdb/postDataFood2", data);
      // 서버로부터 받은 데이터를 상태에 설정
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  const [isClicked, setIsClicked] = useState(true);
  const toggleHandle = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };
  return (
    <div>
      {!isClicked ? (
        <>
          <div>hi</div>
          <div>{JSON.stringify(testData)}</div>
          <div>{JSON.stringify(apiData)}</div>
          <button onClick={setFoodTable}>set food table</button>
          <button onClick={setRecipeTable}>set recipe table</button>
        </>
      ) : null}

      <Router>
        <Routes>
          <Route path="/" element={<App2 />} />
        </Routes>
      </Router>

      <button onClick={toggleHandle}>db체크용</button>
    </div>
  );
}

export default App;
