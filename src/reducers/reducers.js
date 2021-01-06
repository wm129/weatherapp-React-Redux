import { combineReducers } from "redux";
//Reducersのメインをここに設定
//複数設定したReducersを一同に設置

import FetchWeather from "./fetch_weather.js";
import FetchLocation from "./fetch_locations.js";
import FetchConditions from "./fetch_conditions.js";

//Reducer ファイルをcombineReducerに渡す
const reducers= combineReducers({
    FetchWeatherReducer : FetchWeather,
    FetchWeatherLocation: FetchLocation,
    FetchCurrentConditions: FetchConditions
});

export default reducers;
// Storeファイルにパス