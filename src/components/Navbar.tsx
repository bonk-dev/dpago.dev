import Logo from "./Logo.tsx";
import EditPencilIcon from "../assets/icons/EditPencilIcon.tsx";
import GitHubIcon from "../assets/icons/GitHubIcon.tsx";
import AtSymbolIcon from "../assets/icons/AtSymbolIcon.tsx";
import React from "react";

const NavbarLinkBackground = () => {
    return (
        <span className='absolute top-0 bottom-0 left-0 h-full w-0 transition-[width] inline-block bg-violet-700 -z-10'
              aria-hidden='true'>
        </span>
    );
};

interface NavbarLinkProps {
    children: React.ReactNode,
    icon: React.ReactNode,
    smallPadding: boolean,
    to: string
}

const NavbarLink = ({ children, icon, smallPadding, to }: NavbarLinkProps) => {
    const paddingClass = smallPadding
        ? 'px-10 py-5'
        : 'px-12 py-5';
    const generalClass = 'inline-block relative [&>span]:hover:w-full transition-colors border-violet-700 border-r-2 ' +
                         'border-solid [&:last-child]:border-none';
    const hoverClass = 'hover:text-white';
    const className = `${paddingClass} ${generalClass} ${hoverClass}`;

    return (
        <a href={to} className={className}>
            <NavbarLinkBackground/>
            <div aria-hidden='true' className='inline [&>svg]:inline mr-3 [&>*]:w-7 [&>*]:h-7'>
                {icon}
            </div>
            {children}
        </a>
    );
};

interface NavbarLinksProps {
    smallPadding: boolean
}

export const NavbarLinks = ({ smallPadding }: NavbarLinksProps) => {
    return (
        <>
            <NavbarLink
                icon={<EditPencilIcon/>}
                smallPadding={smallPadding}
                to={'#projects'}
            >
                Projects
            </NavbarLink>
            <NavbarLink
                icon={<GitHubIcon/>}
                smallPadding={smallPadding}
                to={'#'}
            >
                GitHub
            </NavbarLink>
            <NavbarLink
                icon={<AtSymbolIcon/>}
                smallPadding={smallPadding}
                to={'#contact'}
            >
                Contact
            </NavbarLink>
        </>
    );

};

interface NavbarProps {
    show: boolean
}

export const Navbar = ({ show }: NavbarProps) => {
    const visibilityClassNamePostfix = show
        ? ''
        : '-translate-y-full';

    return (
        <nav className={`fixed top-0 left-0 right-0 z-10 px-80 bg-stone-100 dark:bg-stone-950 py-4 flex flex-row justify-between items-center +
                        text-xl font-mono tracking-[.61em] uppercase transition-transform ${visibilityClassNamePostfix}`}>
            <a className='flex flex-row items-center gap-3' href='/'>
                <Logo includeMd5={false} width={'55'} height={'48'}/>
                <p className='font-mono font-medium text-3xl mt-2 tracking-normal text-black dark:text-white'>dpago.dev</p>
            </a>

            <div>
                <NavbarLinks smallPadding={true}/>
            </div>
        </nav>
    );
};