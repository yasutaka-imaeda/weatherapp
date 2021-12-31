import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import styles from "./Search.module.scss";
import axios from "axios";
import {
  registerCity,
  registerCityName,
  searchWeather,
  registerForecast,
  registerAfterTemp,
} from "../../app/taskSlice";

const Search: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSearchSubmit = async () => {
    const inputElement: any = document.getElementById("inputCity");
    const inputCityName = inputElement ? inputElement.value : "";
    try {
      const ApiKey = process.env.REACT_APP_WEATHER_APIKEY;
      const city = inputCityName;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ja&appid=${ApiKey}`
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
      const responseHD = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude={hourly,daily}&appid=${ApiKey}`
      );
      console.log(responseHD);
      const forecastdata = [
        {
          icon: responseHD.data.daily[0].weather[0].icon,
          mintemp: responseHD.data.daily[0].temp.min - 273.15,
          maxtemp: responseHD.data.daily[0].temp.max - 273.15,
        },
        {
          icon: responseHD.data.daily[1].weather[0].icon,
          mintemp: responseHD.data.daily[1].temp.min - 273.15,
          maxtemp: responseHD.data.daily[1].temp.max - 273.15,
        },
        {
          icon: responseHD.data.daily[2].weather[0].icon,
          mintemp: responseHD.data.daily[2].temp.min - 273.15,
          maxtemp: responseHD.data.daily[2].temp.max - 273.15,
        },
        {
          icon: responseHD.data.daily[3].weather[0].icon,
          mintemp: responseHD.data.daily[3].temp.min - 273.15,
          maxtemp: responseHD.data.daily[3].temp.max - 273.15,
        },
        {
          icon: responseHD.data.daily[4].weather[0].icon,
          mintemp: responseHD.data.daily[4].temp.min - 273.15,
          maxtemp: responseHD.data.daily[4].temp.max - 273.15,
        },
        {
          icon: responseHD.data.daily[5].weather[0].icon,
          mintemp: responseHD.data.daily[5].temp.min - 273.15,
          maxtemp: responseHD.data.daily[5].temp.max - 273.15,
        },
        {
          icon: responseHD.data.daily[6].weather[0].icon,
          mintemp: responseHD.data.daily[6].temp.min - 273.15,
          maxtemp: responseHD.data.daily[6].temp.max - 273.15,
        },
        {
          icon: responseHD.data.daily[7].weather[0].icon,
          mintemp: responseHD.data.daily[7].temp.min - 273.15,
          maxtemp: responseHD.data.daily[7].temp.max - 273.15,
        },
      ];
      dispatch(registerForecast(forecastdata));
      const gettime = (time: number) => {
        const nowdate = new Date();
        nowdate.setDate(nowdate.getHours() + time);
        const afTime = nowdate.getHours() + time;
        return String(afTime) + "時";
      };
      const afterTempData = [
        {
          time: gettime(0),
          temp: Math.floor(responseHD.data.hourly[0].temp - 273.15),
        },
        {
          time: gettime(1),
          temp: Math.floor(responseHD.data.hourly[1].temp - 273.15),
        },
        {
          time: gettime(2),
          temp: Math.floor(responseHD.data.hourly[2].temp - 273.15),
        },
        {
          time: gettime(3),
          temp: Math.floor(responseHD.data.hourly[3].temp - 273.15),
        },
        {
          time: gettime(4),
          temp: Math.floor(responseHD.data.hourly[4].temp - 273.15),
        },
        {
          time: gettime(5),
          temp: Math.floor(responseHD.data.hourly[5].temp - 273.15),
        },
        {
          time: gettime(6),
          temp: Math.floor(responseHD.data.hourly[6].temp - 273.15),
        },
        {
          time: gettime(7),
          temp: Math.floor(responseHD.data.hourly[7].temp - 273.15),
        },
        {
          time: gettime(8),
          temp: Math.floor(responseHD.data.hourly[8].temp - 273.15),
        },
        {
          time: gettime(9),
          temp: Math.floor(responseHD.data.hourly[9].temp - 273.15),
        },
      ];
      dispatch(registerAfterTemp(afterTempData));
      console.log(afterTempData);
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
              className={styles.input}
              type="text"
              placeholder="検索する都市の名前"
              id="inputCity"
            />
            <input
              type="submit"
              value="検索"
              onClick={onSearchSubmit}
              className={styles.btn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
