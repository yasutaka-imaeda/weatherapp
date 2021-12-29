import React from "react";
import styles from "./GraphTem.module.scss";

const GraphTem: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>一時間ごとの予想気温</div>
    </div>
  );
};

export default GraphTem;
