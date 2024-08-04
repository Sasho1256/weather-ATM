'use client'

import { Container } from "@/components/Container";
import { ForecastWeatherDetail } from "@/components/ForecastWeatherDetail";
import { Navbar } from "@/components/Navbar";
import { WeatherDetails } from "@/components/WeatherDetails";
import { WeatherIcon } from "@/components/WeatherIcon";
import { WeatherData } from "@/types/WeatherData";
import { fToC } from "@/utils/fToC";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format, parse, parseISO } from "date-fns";
import { useAtom } from "jotai";
import { placeAtom } from "./atom";
import { useEffect } from "react";

export default function Home() {
  const [place, setplace] = useAtom(placeAtom);

  const fetchWeatherData = async (placee: any) => {
    try {
      const { data } = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${placee}?unitGroup=us&key=${process.env.NEXT_PUBLIC_WEATHER_KEY}&contentType=json`);
      return data;
    } catch (error) {
      console.log(error);
      setplace('Bulgaria');
    }
  };

  const { isPending, error, data, refetch } = useQuery<WeatherData>(
    {
      queryKey: ['repoData'],
      queryFn: () => fetchWeatherData(place)
    }
  );

  useEffect(() => {
      refetch()
  }, [place, refetch]);

  console.log(data);
  // console.log(data?.days[0].hours[0].datetime);

  if (isPending)
    return (
      <div className=" flex items-center min-h-screen justify-center">
        <div className="animate-bounce text-3xl">Loading...</div>
      </div>
    );

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar/>
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
        {/* today data */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="flex gap-1 text-2xl items-end">
              <div>
                {format(parseISO(data.days[0].datetime ?? ''), 'EEEE')}
              </div>
              <div className="text-lg">
                ({format(parseISO(data.days[0].datetime ?? ''), 'dd.MM.yyyy')})
              </div>
            </h2>
            <Container className="gap-10 px-6 items-center">
              {/* Current temp */}
              <div className="flex flex-col px-4">
                <span className="text-5xl">
                  {fToC(data.currentConditions.temp ?? 0)}°
                </span>
                <div className="text-xs space-x-1 whitespace-nowrap">
                  Feels like: {fToC(data.currentConditions.feelslike ?? 0)}°
                </div>
                <div className="text-xs space-x-2">
                  <span>
                    {fToC(data.days[0].tempmax ?? 0)}°↑{" "}
                  </span>
                  <span>
                    {" "}{fToC(data.days[0].tempmin ?? 0)}°↓
                  </span>
                </div>
              </div>
              {/* Time and weather icon */}
              <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3">
                {data.days[0].hours.map((d, i) =>
                  <div key={i} className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-blu">
                    <div>
                      {format(parse(d.datetime.split(":", 2).join(":"), "HH:mm", new Date()), "HH:mm")}
                    </div>
                    <WeatherIcon condition={d.conditions} className={"text-5xl"} />
                    <div className="text-2xl">
                      {fToC(d.temp ?? 0)}°
                    </div>
                  </div>
                )}
              </div>
            </Container>
          </div>
          <div className="flex gap-4">
            {/* left */}
            <Container className="w-fit justify-center flex-col px-4 items-center">
              <div className="text-center capitalize mb-3 font-semibold text-xl">
                {data.currentConditions.conditions}
              </div>
              <div>
                <WeatherIcon condition={data.currentConditions.conditions ?? 'clear'} className="text-7xl"></WeatherIcon>
              </div>
            </Container>
            {/* right */}
            <Container className="bg-yellow-300/80 px-9 gap-4 justify-between overflow-x-auto">
              <WeatherDetails visibility={data.currentConditions.visibility} humidity={data.currentConditions.humidity} windSpeed={data.currentConditions.windspeed} airPressure={data.currentConditions.pressure} sunrise={data.currentConditions.sunrise} sunset={data.currentConditions.sunset} />
            </Container>
          </div>
        </section>
        {/* 7-day forecast data */}
        <section className="flex w-full flex-col gap-4">
          <div className="text-2xl">
            Forecast (7 days)
          </div>
          <div className="py-4">
            {data.days.map((d) => 
              <ForecastWeatherDetail date={format(parseISO(d.datetime ?? ''), 'dd.MM')} day={format(parseISO(d.datetime ?? ''), 'EEEE')} temp={d.temp} feelsLike={d.feelslike} tempMin={d.tempmin} tempMax={d.tempmax} condition={d.conditions} visibility={d.visibility} humidity={d.humidity} windSpeed={d.windspeed} airPressure={d.pressure} sunrise={d.sunrise} sunset={d.sunset} />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
