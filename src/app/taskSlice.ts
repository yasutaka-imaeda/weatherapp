import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
import { RootState, AppThunk } from "../app/store";

export interface TaskState {
  city: { name: string; longitude: number; latitude: number };
  weather: {
    weather: string;
    weatherdis: string;
    icon: string;
    temp: number;
    pressure: number;
    humidity: number;
    windspeed: number;
    windowdeg: number;
  };
  cityName: string;
  forecast: [
    { icon: string; mintemp: number; maxtemp: number },
    { icon: string; mintemp: number; maxtemp: number },
    { icon: string; mintemp: number; maxtemp: number },
    { icon: string; mintemp: number; maxtemp: number },
    { icon: string; mintemp: number; maxtemp: number },
    { icon: string; mintemp: number; maxtemp: number },
    { icon: string; mintemp: number; maxtemp: number },
    { icon: string; mintemp: number; maxtemp: number }
  ];
  afterTemp: [
    { time: string; temp: number },
    { time: string; temp: number },
    { time: string; temp: number },
    { time: string; temp: number },
    { time: string; temp: number },
    { time: string; temp: number },
    { time: string; temp: number },
    { time: string; temp: number },
    { time: string; temp: number },
    { time: string; temp: number }
  ];
}

const initialState: TaskState = {
  city: { name: "tokyo", longitude: 140.0, latitude: 36.0 },
  weather: {
    weather: "",
    weatherdis: "",
    icon: "01d",
    temp: 0,
    pressure: 0,
    humidity: 0,
    windspeed: 0,
    windowdeg: 0,
  },
  cityName: "tokyo",
  forecast: [
    { icon: "01d", mintemp: 0, maxtemp: 0 },
    { icon: "01d", mintemp: 0, maxtemp: 0 },
    { icon: "01d", mintemp: 0, maxtemp: 0 },
    { icon: "01d", mintemp: 0, maxtemp: 0 },
    { icon: "01d", mintemp: 0, maxtemp: 0 },
    { icon: "01d", mintemp: 0, maxtemp: 0 },
    { icon: "01d", mintemp: 0, maxtemp: 0 },
    { icon: "01d", mintemp: 0, maxtemp: 0 },
  ],
  afterTemp: [
    { time: "", temp: 0 },
    { time: "", temp: 0 },
    { time: "", temp: 0 },
    { time: "", temp: 0 },
    { time: "", temp: 0 },
    { time: "", temp: 0 },
    { time: "", temp: 0 },
    { time: "", temp: 0 },
    { time: "", temp: 0 },
    { time: "", temp: 0 },
  ],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    registerCity: (state, action) => {
      state.city = action.payload;
    },
    registerCityName: (state, action) => {
      state.cityName = action.payload;
    },
    searchWeather: (state, action) => {
      state.weather = action.payload;
    },
    registerForecast: (state, action) => {
      state.forecast = action.payload;
    },
    registerAfterTemp: (state, action) => {
      state.afterTemp = action.payload;
    },
  },
});

export const {
  registerCity,
  registerCityName,
  searchWeather,
  registerForecast,
  registerAfterTemp,
} = taskSlice.actions;

export const selectCityName = (state: RootState): TaskState["cityName"] =>
  state.task.cityName;
export const selectCity = (state: RootState): TaskState["city"] =>
  state.task.city;
export const selectWeather = (state: RootState): TaskState["weather"] =>
  state.task.weather;
export const selectForecast = (state: RootState): TaskState["forecast"] =>
  state.task.forecast;
export const selectAfterTemp = (state: RootState): TaskState["afterTemp"] =>
  state.task.afterTemp;

export default taskSlice.reducer;
