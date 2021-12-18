import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./Search.module.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";

const Search: React.FC = () => {
  const ApiKey = process.env.REACT_APP_WEATHER_APIKEY;
  const City = "Tokyo";

  // const params = {
  //   appid: ApiKey,
  //   q: City,
  // };
  // const Url = `http://api.openweathermap.org/data/2.5/forecast`;

  const [datas, setDatas] = useState([]);

  const SearchWeather = async (city: any) => {
    try {
      // const params = {
      //   key: ApiKey,
      //   q: city,
      // };
      // const response = await axios.get(Url, { params });
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${ApiKey}`
      );
      setDatas(response.data.weather);
      if (response.data.total === 0) {
        window.alert("お探しの都市はありません");
      }
    } catch {
      window.alert("天気の取得に失敗しました。");
    }
  };

  // console.log("これが結果です");
  // console.log({ response });
  // console.log("これが結果のタイプです");
  // console.log(typeof response);
  // console.log(Object.values(response));
  // console.log(Object.keys(response).length);
  console.log("これが結果です");
  console.log(datas);
  console.log("これが結果のタイプです");
  console.log(typeof datas);
  console.log("これが結果の長さ");
  console.log(Object.keys(datas).length);
  console.log("これが取得対象の都市です");
  // console.log(datas.weather);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.searchTitle}>都市名</div>
        <div className={styles.form}>
          <form className={styles.form}>
            <div className={styles.SearchBox}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="都市名を検索"
                  variant="outlined"
                />
              </Box>
            </div>
            <div className={styles.SearchBtn}>
              <Stack spacing={2} direction="row" height="52px">
                <Button variant="contained" onClick={SearchWeather}>
                  検索
                </Button>
              </Stack>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
