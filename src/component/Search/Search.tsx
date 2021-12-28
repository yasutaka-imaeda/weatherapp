import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import styles from "./Search.module.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import {
  selectCity,
  registerCity,
  registerCityName,
  selectCityName,
  searchWeather,
  selectWeather,
} from "../../app/taskSlice";

const Search: React.FC = () => {
  const dispatch = useAppDispatch();

  // const City = "Tokyo";

  // const params = {
  //   appid: ApiKey,
  //   q: City,
  // };
  // const Url = `http://api.openweathermap.org/data/2.5/forecast`;

  const onSearchSubmit = async () => {
    const inputElement: any = document.getElementById("inputCity");
    const inputCityName = inputElement ? inputElement.value : "";
    try {
      const ApiKey = "3c05d3de91a0a2b64dd64cd68e18e38e";
      // const ApiKey = process.env.REACT_APP_WEATHER_APIKEY;
      const city = inputCityName;
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ja&appid=${ApiKey}`
      );
      dispatch(registerCityName(response.data.name));
      const cityData = {
        name: response.data.name,
        longitude: response.data.coord.lon,
        latitude: response.data.coord.lat,
      };
      dispatch(registerCity(cityData));
      const weatherData = {
        weather: response.data.weather[0].main,
        weatherdis: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        temp: response.data.main.temp - 273.15,
        pressure: response.data.main.pressure,
        humidity: response.data.main.humidity,
        windspeed: response.data.wind.speed,
        windowdeg: response.data.wind.deg,
      };
      dispatch(searchWeather(weatherData));
      console.log(response);
      const responseHD = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude={hourly,daily}&appid=${ApiKey}`
      );
      console.log(responseHD);
      if (response.data.total === 0) {
        window.alert("お探しの都市はありません");
      }
    } catch {
      window.alert("天気の取得に失敗しました。");
    }
    inputElement.value = "";
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.searchTitle}>都市名</div>
        <div className={styles.form}>
          <div className={styles.form}>
            <input
              type="text"
              placeholder="検索する都市の名前"
              id="inputCity"
              // onInput={changeName}
            />
            <input type="submit" value="検索" onClick={onSearchSubmit} />
            {/* <div>{datas}</div> */}
            {/* <div className={styles.SearchBox}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                onSubmit={onSearchSubmit}
              >
                <TextField
                  id="outlined-basic"
                  label="都市名を検索"
                  variant="outlined"
                  onSubmit={onSearchSubmit}
                />
              </Box>
            </div>
            <div className={styles.SearchBtn}>
              <Stack spacing={2} direction="row" height="52px">
                <Button variant="contained">検索</Button>
              </Stack>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
