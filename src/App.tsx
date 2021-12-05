import React from "react";
import Search from "./component//Search/Search";
import styles from "./App.module.scss";
import WeatherAbout from "./component/WeatherAbout/WeatherAbout";
import Map from "./component/Map/Map";

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
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
