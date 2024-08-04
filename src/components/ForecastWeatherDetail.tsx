import * as React from 'react';
import { Container } from './Container';
import { WeatherIcon } from './WeatherIcon';
import { IWeatherDetailsProps, WeatherDetails } from './WeatherDetails';
import { fToC } from '@/utils/fToC';

export interface IForecastWeatherDetailProps extends IWeatherDetailsProps {
    date: string;
    day: string;
    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
    condition: string;
}

export function ForecastWeatherDetail (props: IForecastWeatherDetailProps) {
  return (
    <Container className='gap-4 mb-6'>
        {/* left */}
        <section className='flex gap-4 items-center px-4'>
            <div className='text-center'>
                <WeatherIcon condition={props.condition} className='text-6xl pb-2'/>
                <div>{props.date}</div>
                <div className='text-sm'>{props.day}</div>
            </div>
            <div className='flex flex-col px-4'>
                <span className='text-5xl'>{fToC(props.temp)}°</span>
                <div className="text-xs space-x-2">
                  <span>
                    {fToC(props.tempMax ?? 0)}°↑{" "}
                  </span>
                  <span>
                    {" "}{fToC(props.tempMin ?? 0)}°↓
                  </span>
                </div>
                <div className='text-sm'>
                    <span> Feels like </span>
                    <span> {fToC(props.feelsLike)}° </span>
                </div>
                <div className='capitalize text-lg'>
                    {props.condition}
                </div>
            </div>
        </section>
        {/* right */}
        <section className='overflow-x-auto flex justify-between gap-4 px-4 w-full pr-10'>
            <WeatherDetails visibility={props.visibility} humidity={props.humidity} windSpeed={props.windSpeed} airPressure={props.airPressure} sunrise={props.sunrise} sunset={props.sunset} />
        </section>
    </Container>
  );
}
