import { cn } from '@/utils/cn';
import * as React from 'react';
import { FaSearch } from "react-icons/fa";

export interface ISearchBoxProps {
    className?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}

export function SearchBox(props: ISearchBoxProps) {
    return (
        <form onSubmit={props.onSubmit} className={cn('flex relative items-center justify-center h-10', props.className)}>
            <input
                type="text"
                onChange={props.onChange}
                value={props.value}
                placeholder='Search location...'
                className={cn("px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 h-full", props.className)}/>
            <button
                type='submit'
                className={cn('px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600 h-full transition-colors', props.className)}>
                <FaSearch />
            </button>
        </form>
    );
}
