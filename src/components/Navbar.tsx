import * as React from 'react';
import { FaSun } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { SearchBox } from './SearchBox';
import { useAtom } from 'jotai';
import { placeAtom } from '@/app/atom';

export interface INavbarProps {
}

export function Navbar(props: INavbarProps) {
    const[city, setCity] = React.useState("");
    const[error, setError] = React.useState("");
    const[place, setPlace] = useAtom(placeAtom);

    function handleInputChange(value: string) {
        setCity(value);
    }

    function handleSubmitSearch(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setPlace(city);
    }

    return (
        <nav className='shadow-sm sticky top-0 left-0 z-50 bg-white'>
            <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto'>
                <div className='flex items-center justify-center gap-2'>
                    <h2 className='text-gray-500 text-3xl'>
                        Weather ATM
                    </h2>
                    <FaSun className='text-3xl mt-1 text-yellow-300' />
                </div>
                <section className='flex gap-2 items-center'>
                    {/* <FaLocationCrosshairs className='text-2xl text-gray-400 hover:opacity-80 cursor-pointer transition-opacity'/> */}
                    <FaLocationDot className='text-3xl'/>
                    <div className='text-slate-900/80 text-sm capitalize'>
                        {place}
                    </div>
                    <div>
                        <SearchBox value={city} onSubmit={handleSubmitSearch} onChange={(e) => handleInputChange(e.target.value)}/>
                    </div>
                </section>
            </div>
        </nav>
    );
}
