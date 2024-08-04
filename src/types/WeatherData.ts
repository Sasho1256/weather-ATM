import { CurrentConditions } from "./CurrentConditions";
import { DayData } from "./DayData";

export interface WeatherData {
    queryCost: number;
    latitude: number;
    longitude: number;
    resolvedAddress: string;
    address: string;
    timezone: string;
    tzoffset: number;
    description: string;
    days: DayData[];
    currentConditions: CurrentConditions
  }
  