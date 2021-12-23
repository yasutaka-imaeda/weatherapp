import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
import { RootState, AppThunk } from "../app/store";

export interface TaskState {
  city: { name: string; longitude: number; latitude: number };
  weather: { weather: string; weatherdis: string; icon: string; temp: number };
  cityName: string;
}

const initialState: TaskState = {
  city: { name: "tokyo", longitude: 36.0, latitude: 140.0 },
  weather: { weather: "", weatherdis: "", icon: "", temp: 0 },
  cityName: "",
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
  },
});

export const { registerCity, registerCityName, searchWeather } =
  taskSlice.actions;

export const selectCityName = (state: RootState): TaskState["cityName"] =>
  state.task.cityName;
export const selectCity = (state: RootState): TaskState["city"] =>
  state.task.city;
export const selectWeather = (state: RootState): TaskState["weather"] =>
  state.task.weather;

export default taskSlice.reducer;
