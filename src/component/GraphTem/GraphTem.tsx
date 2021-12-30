import React from "react";
import styles from "./GraphTem.module.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useAppSelector } from "../../app/hooks";
import { selectAfterTemp } from "../../app/taskSlice";
import { positions } from "@mui/system";

const GraphTem: React.FC = () => {
  const data = useAppSelector(selectAfterTemp);
  return (
    <div className={styles.root}>
      <div className={styles.title}>1時間ごとの予想気温</div>
      <ResponsiveContainer width="120%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis label={{ value: "気温", angle: -90 }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphTem;
