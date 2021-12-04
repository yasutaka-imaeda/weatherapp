import React from "react";
import Search from "./component//Search";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.serachWrapper}>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default App;
