import React from "react";
import styles from "./Forecast.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectForecast } from "../../app/taskSlice";
import { style } from "@mui/system";

const Forecast: React.FC = () => {
  const getday = (day: number) => {
    const nowdate = new Date();
    nowdate.setDate(nowdate.getDate() + day);
    const afmonth = nowdate.getMonth() + 1;
    const afday = nowdate.getDate();
    return String(afmonth) + "月" + String(afday) + "日";
  };
  const Forecast: any = useAppSelector(selectForecast);
  return (
    <div className={styles.root}>
      <div className={styles.title}>一週間の予想天気</div>
      <div className={styles.wrapper}>
        <div className={styles.day}>{getday(0)}</div>
        <div className={styles.forecast}>
          <div className={styles.icon}>
            <img
              src={`http://openweathermap.org/img/wn/${Forecast[0].icon}@2x.png`}
            />
          </div>
          <div className={styles.temp}>{`${Math.floor(
            Forecast[0].maxtemp
          )} / ${Math.floor(Forecast[0].mintemp)} ℃`}</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.day}>{getday(1)}</div>
        <div className={styles.forecast}>
          <div className={styles.icon}>
            <img
              src={`http://openweathermap.org/img/wn/${Forecast[1].icon}@2x.png`}
            />
          </div>
          <div className={styles.temp}>{`${Math.floor(
            Forecast[1].maxtemp
          )} / ${Math.floor(Forecast[1].mintemp)} ℃`}</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.day}>{getday(2)}</div>
        <div className={styles.forecast}>
          <div className={styles.icon}>
            <img
              src={`http://openweathermap.org/img/wn/${Forecast[2].icon}@2x.png`}
            />
          </div>
          <div className={styles.temp}>{`${Math.floor(
            Forecast[2].maxtemp
          )} / ${Math.floor(Forecast[2].mintemp)} ℃`}</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.day}>{getday(3)}</div>
        <div className={styles.forecast}>
          <div className={styles.icon}>
            <img
              src={`http://openweathermap.org/img/wn/${Forecast[3].icon}@2x.png`}
            />
          </div>
          <div className={styles.temp}>{`${Math.floor(
            Forecast[3].maxtemp
          )} / ${Math.floor(Forecast[3].mintemp)} ℃`}</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.day}>{getday(4)}</div>
        <div className={styles.forecast}>
          <div className={styles.icon}>
            <img
              src={`http://openweathermap.org/img/wn/${Forecast[4].icon}@2x.png`}
            />
          </div>
          <div className={styles.temp}>{`${Math.floor(
            Forecast[4].maxtemp
          )} / ${Math.floor(Forecast[4].mintemp)} ℃`}</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.day}>{getday(5)}</div>
        <div className={styles.forecast}>
          <div className={styles.icon}>
            <img
              src={`http://openweathermap.org/img/wn/${Forecast[5].icon}@2x.png`}
            />
          </div>
          <div className={styles.temp}>{`${Math.floor(
            Forecast[5].maxtemp
          )} / ${Math.floor(Forecast[5].mintemp)} ℃`}</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.day}>{getday(6)}</div>
        <div className={styles.forecast}>
          <div className={styles.icon}>
            <img
              src={`http://openweathermap.org/img/wn/${Forecast[6].icon}@2x.png`}
            />
          </div>
          <div className={styles.temp}>{`${Math.floor(
            Forecast[6].maxtemp
          )} / ${Math.floor(Forecast[6].mintemp)} ℃`}</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.day}>{getday(7)}</div>
        <div className={styles.forecast}>
          <div className={styles.icon}>
            <img
              src={`http://openweathermap.org/img/wn/${Forecast[7].icon}@2x.png`}
            />
          </div>
          <div className={styles.temp}>{`${Math.floor(
            Forecast[7].maxtemp
          )} / ${Math.floor(Forecast[7].mintemp)} ℃`}</div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
