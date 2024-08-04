import * as React from 'react';

export interface ISingleWeatherDetailProps {
    information: string;
    icon: React.ReactNode;
    value: string;
}

export function SingleWeatherDetail(props: ISingleWeatherDetailProps) {
    return (
        <div className='flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80'>
            <div className='whitespace-nowrap text-base'>
                {props.information}
            </div>
            <div className='text-4xl'>
                {props.icon}
            </div>
            <div className='text-base'>
                {props.value}
            </div>
        </div>
    );
}
