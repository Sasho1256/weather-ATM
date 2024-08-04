import * as React from 'react';
import { SingleWeatherDetail } from './SingleWeatherDetail';
import { LuEye, LuSunrise, LuSunset } from 'react-icons/lu';
import { FiDroplet } from 'react-icons/fi';
import { MdAir } from 'react-icons/md';
import { ImMeter } from 'react-icons/im';

export interface IWeatherDetailsProps {
    visibility: number;
    humidity: number;
    windSpeed: number;
    airPressure: number;
    sunrise: string;
    sunset: string;
}

export function WeatherDetails(props: IWeatherDetailsProps) {
    return (
        <>
            <SingleWeatherDetail information={'Visibility'} icon={<LuEye />} value={props.visibility+' km'} />
            <SingleWeatherDetail information={'Humidity'} icon={<FiDroplet />} value={props.humidity+'%'} />
            <SingleWeatherDetail information={'Wind speed'} icon={<MdAir />} value={props.windSpeed+' km/h'} />
            <SingleWeatherDetail information={'Air pressure'} icon={<ImMeter />} value={props.airPressure+' hPa'} />
            <SingleWeatherDetail information={'Sunrise'} icon={<LuSunrise />} value={props.sunrise} />
            <SingleWeatherDetail information={'Sunset'} icon={<LuSunset />} value={props.sunset} />
        </>
    );
}
