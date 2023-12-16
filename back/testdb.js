const express = require("express");
const axios = require("axios");
const connection = require("./db");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
router.use(cors());

router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
router.use(bodyParser.json({ limit: "50mb" }));

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL: " + error.stack);
    return;
  }
  console.log("Connected to MySQL server " + connection.threadId);
});

router.get("/", (req, res) => {
  const query = "SELECT * FROM test_table";

  connection.query(query, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.json(results);
    }
  });
});

router.get("/getAllFood", (req, res) => {
  console.log("getAllFood 호출됨.");

  const sqlQuery = `
  SELECT 
    *
  FROM 
    food
  INNER JOIN 
    recipe ON food.food_id = recipe.food_id
`;

  connection.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.json(results);
    }
  });
});

router.post("/postDataFood", async (req, res) => {
  // POST 요청의 데이터는 req.body에 있습니다.
  const dataFromFrontend = req.body;
  // dataFromFrontend.MANUAL01 이런식으로 해서 넣기.
  console.log(JSON.stringify(dataFromFrontend));

  let errorCount = 0;
  let insertCount = 0;

  ("INSERT INTO food (food_id, food_name, category, calorie, carbohydrate, protein, province, salt, ingredient, hashtag) VALUES (?,?,?,?,?,?,?,?,?,?)");
  for (let i = 0; i < dataFromFrontend.length; i++) {
    const eachData = dataFromFrontend[i];
    const food_id = Number(eachData.RCP_SEQ);
    const food_name = eachData.RCP_NM;
    const category = eachData.RCP_PAT2;
    const calorie = eachData.INFO_ENG;
    const carbohydrate = eachData.INFO_CAR;
    const protein = eachData.INFO_PRO;
    const province = eachData.INFO_FAT;
    const salt = eachData.INFO_NA;
    const ingredient = eachData.RCP_PARTS_DTLS;
    const hashtag = eachData.HASH_TAG;
    const main_image = eachData.ATT_FILE_NO_MK;
    try {
      connection.query(
        "INSERT INTO food (food_id, food_name, category, calorie, carbohydrate, protein, province, salt, ingredient, hashtag, main_image) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
        [
          food_id,
          food_name,
          category,
          calorie,
          carbohydrate,
          protein,
          province,
          salt,
          ingredient,
          hashtag,
          main_image,
        ]
      );
      console.log("Insert data : " + food_name);
      insertCount++;
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        // console.log('Duplicate data : ' + element.title);
        errorCount++;
      } else {
        console.log(
          "Error while inserting data : " +
            error +
            "\ntitle : " +
            JSON.stringify(eachData)
        );
        errorCount++;
      }
    }
  }
  // 데이터를 가공하거나 다른 작업을 수행한 후 클라이언트로 응답을 보냅니다.
  //res.send(`Data received from front-end (POST): ${dataFromFrontend}`);
  console.log("에러 or 중복된 데이터 개수 : " + errorCount);
  console.log("추가된 데이터 개수 : " + insertCount);
  res.send("Data inserted successfully.");
});

router.post("/postDataFood2", async (req, res) => {
  // POST 요청의 데이터는 req.body에 있습니다.
  const dataFromFrontend = req.body;
  // dataFromFrontend.MANUAL01 이런식으로 해서 넣기.
  console.log(JSON.stringify(dataFromFrontend));

  let errorCount = 0;
  let insertCount = 0;

  ("INSERT INTO recipe (food_id, cooking_method1,cooking_method2,cooking_method3,cooking_method4,cooking_method5,cooking_method6,cooking_method7,cooking_method8,cooking_method9,cooking_method10,cooking_method11,cooking_method12,cooking_method13,cooking_method14,cooking_method15,cooking_method16,cooking_method17,cooking_method18,cooking_method19,cooking_method20) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
  for (let i = 0; i < dataFromFrontend.length; i++) {
    const eachData = dataFromFrontend[i];
    const food_id = Number(eachData.RCP_SEQ);
    const manual01 = eachData.MANUAL01;
    const manual02 = eachData.MANUAL02;
    const manual03 = eachData.MANUAL03;
    const manual04 = eachData.MANUAL04;
    const manual05 = eachData.MANUAL05;
    const manual06 = eachData.MANUAL06;
    const manual07 = eachData.MANUAL07;
    const manual08 = eachData.MANUAL08;
    const manual09 = eachData.MANUAL09;
    const manual10 = eachData.MANUAL10;
    const manual11 = eachData.MANUAL11;
    const manual12 = eachData.MANUAL12;
    const manual13 = eachData.MANUAL13;
    const manual14 = eachData.MANUAL14;
    const manual15 = eachData.MANUAL15;
    const manual16 = eachData.MANUAL16;
    const manual17 = eachData.MANUAL17;
    const manual18 = eachData.MANUAL18;
    const manual19 = eachData.MANUAL19;
    const manual20 = eachData.MANUAL20;

    try {
      connection.query(
        "INSERT INTO recipe (food_id, cooking_method1,cooking_method2,cooking_method3,cooking_method4,cooking_method5,cooking_method6,cooking_method7,cooking_method8,cooking_method9,cooking_method10,cooking_method11,cooking_method12,cooking_method13,cooking_method14,cooking_method15,cooking_method16,cooking_method17,cooking_method18,cooking_method19,cooking_method20) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          food_id,
          manual01,
          manual02,
          manual03,
          manual04,
          manual05,
          manual06,
          manual07,
          manual08,
          manual09,
          manual10,
          manual11,
          manual12,
          manual13,
          manual14,
          manual15,
          manual16,
          manual17,
          manual18,
          manual19,
          manual20,
        ]
      );
      console.log("Insert data : " + food_id);
      insertCount++;
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        // console.log('Duplicate data : ' + element.title);
        errorCount++;
      } else {
        console.log(
          "Error while inserting data : " +
            error +
            "\ntitle : " +
            JSON.stringify(eachData)
        );
        errorCount++;
      }
    }
  }
  // 데이터를 가공하거나 다른 작업을 수행한 후 클라이언트로 응답을 보냅니다.
  //res.send(`Data received from front-end (POST): ${dataFromFrontend}`);
  console.log("에러 or 중복된 데이터 개수 : " + errorCount);
  console.log("추가된 데이터 개수 : " + insertCount);
  res.send("Data inserted successfully.");
});

module.exports = router;
