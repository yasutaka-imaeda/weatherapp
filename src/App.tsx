import React from "react";
import Search from "./component/Search/Search";
import styles from "./App.module.scss";
import WeatherAbout from "./component/WeatherAbout/WeatherAbout";
import Maps from "./component/Map/Map";
import GraphTem from "./component/GraphTem/GraphTem";
import Forecast from "./component/Forecast/Forecast";

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.serachWrapper}>
          <Search />
        </div>
        <div className={styles.mainWrapper}>
          <div className={styles.weatherAboutWrapper}>
            <WeatherAbout />
          </div>
          <div className={styles.mapWrapper}>
            <Maps />
          </div>
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.GraphTemWrapper}>
            <GraphTem />
          </div>
          <div className={styles.forecastWrapper}>
            <Forecast />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
