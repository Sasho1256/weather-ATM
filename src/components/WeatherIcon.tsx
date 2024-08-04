import * as React from 'react';
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaBolt, FaSmog, FaCloudSun, FaCloudShowersHeavy, FaCloudSunRain } from 'react-icons/fa';
import { MdBlock } from 'react-icons/md';

export interface IWeatherIconProps {
    className?: string
    condition: string
}

export function WeatherIcon(props: IWeatherIconProps) {
    const getIcon = (condition: string) => {
        switch (condition.toLowerCase()) {
            case 'clear':
                return <FaSun />;
            case 'cloudy':
                return <FaCloud />;
            case 'overcast':
                return <FaCloud />;
            case 'partially cloudy':
                return <FaCloudSun />;
            case 'rain':
                return <FaCloudRain />;
            case 'rain, overcast':
                return <FaCloudShowersHeavy />;
            case 'snow':
                return <FaSnowflake />;
            case 'thunderstorm':
                return <FaBolt />;
            case 'fog':
                return <FaSmog />;
            case 'rain, partially cloudy':
                return <FaCloudSunRain />;
            default:
                return <MdBlock />;
        }
    };

    const getColoredIcon = (condition: string) => {
        switch (condition.toLowerCase()) {
            case 'clear':
                return (props.className ?? '') + " text-yellow-300";
            case 'cloudy':
                return (props.className ?? '') + " text-gray-500";
            case 'overcast':
                return (props.className ?? '') + " text-gray-500";
            case 'partially cloudy':
                return (props.className ?? '') + " text-gray-300";
            case 'rain':
                return (props.className ?? '') + " text-gray-800";
            case 'rain, overcast':
                return (props.className ?? '') + " text-gray-800";
            case 'snow':
                return (props.className ?? '') + " text-blue-300";
            case 'thunderstorm':
                return (props.className ?? '') + " text-gray-500";
            case 'fog':
                return (props.className ?? '') + " text-gray-300";
            case 'rain, partially cloudy':
                return (props.className ?? '') + " text-gray-500";
            default:
                return (props.className ?? '') + " text-red-500";
        }
    };

    return (
        <div className={getColoredIcon(props.condition)}>
            {getIcon(props.condition)}
        </div>
    );

}
