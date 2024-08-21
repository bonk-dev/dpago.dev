import React from "react";

const DecorLine = () => {
    return (
        <span className='h-[2px] bg-purple-700 flex-1'></span>
    );
};

interface SectionHeaderProps {
    children: React.ReactNode
}

const SectionHeader = ({ children }: SectionHeaderProps) => {
    return (
        <header className='flex flex-row items-center py-8 pt-28'>
            <DecorLine/>
            <h1 className='uppercase text-4xl font-semibold px-6'>{children}</h1>
            <DecorLine/>
        </header>
    );
};

export default SectionHeader;