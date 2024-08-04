import { WeatherStation } from "./WeatherStation";

export interface CurrentConditions {
    cloudcover: number;
    conditions: string;
    datetime: string;
    datetimeEpoch: number;
    dew: number;
    feelslike: number;
    humidity: number;
    icon: string;
    moonphase: number;
    precip: number;
    precipprob: number;
    preciptype: null;
    pressure: number;
    snow: number;
    snowdepth: number;
    solarenergy: number;
    solarradiation: number;
    source: string;
    stations: WeatherStation[];
    sunrise: string;
    sunriseEpoch: number;
    sunset: string;
    sunsetEpoch: number;
    temp: number;
    uvindex: number;
    visibility: number;
    winddir: number;
    windgust: number;
    windspeed: number;
  }