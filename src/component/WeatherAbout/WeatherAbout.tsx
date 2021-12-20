import React from "react";
import styles from "./WeatherAbout.module.scss";
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCity, selectCityName, registerCity } from "../../app/taskSlice";

const WeatherAbout: React.FC = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const day = now.getDay();
  const datelist = ["日", "月", "火", "水", "木", "金", "土"];
  const days = datelist[day];

  const CityInfo: any = useAppSelector(selectCity);
  console.log(CityInfo);

  return (
    <div className={styles.root}>
      <div className={styles.time}>
        <p>
          {`${year} 年 ${month} 月 ${date} 日 ${hours} 時 ${minutes} 分 ${seconds} 秒 ( ${days} 曜日） `}
        </p>
        <p>現在時刻</p>
      </div>
      <div className={styles.place}>{CityInfo.name}</div>
    </div>
  );
};

export default WeatherAbout;
