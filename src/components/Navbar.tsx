import Logo from "./Logo.tsx";
import EditPencilIcon from "../assets/icons/EditPencilIcon.tsx";
import GitHubIcon from "../assets/icons/GitHubIcon.tsx";
import AtSymbolIcon from "../assets/icons/AtSymbolIcon.tsx";
import React, {useEffect, useState} from "react";
import BarsIcon from "../assets/icons/BarsIcon.tsx";
import CrossIcon from "../assets/icons/CrossIcon.tsx";

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
    to: string,
    onClick?: (to: string) => void,
    openInANewTab?: boolean
}

const NavbarLink = ({ children, icon, smallPadding, to, onClick, openInANewTab }: NavbarLinkProps) => {
    const paddingClass = smallPadding
        ? 'px-4 py-5'
        : 'px-12 py-5';
    const generalClass = 'inline-block relative [&>span]:hover:w-full transition-colors border-violet-700 lg:border-r-2 lg:border-b-0 ' +
                         'border-solid border-b-2 [&:last-child]:border-none';
    const hoverClass = 'hover:text-white';
    const className = `${paddingClass} ${generalClass} ${hoverClass}`;

    const handleOnClick = () => {
        if (onClick == null) return;

        onClick(to);
    };

    return (
        <a href={to} className={className} onClick={handleOnClick}
           target={openInANewTab ? '_blank' : ''} rel={openInANewTab ? 'noopener' : ''}>
            <NavbarLinkBackground/>
            <div aria-hidden='true' className='inline [&>svg]:inline mr-3 [&>*]:w-7 [&>*]:h-7'>
                {icon}
            </div>
            {children}
        </a>
    );
};

interface NavbarLinksProps {
    smallPadding: boolean,
    onClick?: (to: string) => void
}

export const NavbarLinks = ({ smallPadding, onClick }: NavbarLinksProps) => {
    return (
        <>
            <NavbarLink
                icon={<EditPencilIcon/>}
                smallPadding={smallPadding}
                to={'#projects'}
                onClick={onClick}
            >
                Projects
            </NavbarLink>
            <NavbarLink
                icon={<GitHubIcon/>}
                smallPadding={smallPadding}
                to={'https://github.com/bonk-dev'}
                onClick={onClick}
                openInANewTab={true}
            >
                GitHub
            </NavbarLink>
            <NavbarLink
                icon={<AtSymbolIcon/>}
                smallPadding={smallPadding}
                to={'#contact'}
                onClick={onClick}
            >
                Contact
            </NavbarLink>
        </>
    );
};

interface DrawerMenuProps {
    show: boolean,
    onDismiss: () => void
}

const DrawerMenu = ({ show, onDismiss }: DrawerMenuProps) => {
    const showClassName = show
        ? 'translate-x-0 opacity-100'
        : '-translate-x-full opacity-0';

    return (
        <div className={`fixed z-20 w-screen top-0 bottom-0 left-0 ${showClassName} bg-violet-600 transition-all
                         px-3`}
        >
            <button className='px-3 py-4 cursor-pointer w-fit' onClick={onDismiss} aria-label='Close the drawer menu'>
                <CrossIcon className={'w-9 h-9'} aria-hidden/>
            </button>

            <div className='[&>*]:w-full'>
                <NavbarLinks smallPadding={true} onClick={onDismiss}/>
            </div>
        </div>
    );
};

interface NavbarProps {
    show: boolean
}

export const Navbar = ({ show }: NavbarProps) => {
    const visibilityClassNamePostfix = show
        ? ''
        : '-translate-y-full';

    const [showDrawer, setShowDrawer] = useState(false);
    const onDrawerDismiss = () => {
        setShowDrawer(false);
    };
    const onDrawerShow = () => {
        setShowDrawer(true);
    };

    useEffect(() => {
        if (!show) {
            setShowDrawer(false);
        }
    }, [show]);

    useEffect(() => {
        if (showDrawer) {
            document.body.classList.add('overflow-y-hidden');
        }
        else {
            document.body.classList.remove('overflow-y-hidden');
        }
    }, [showDrawer]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-10 lg:px-16 xl:px-52 2xl:px-80 bg-stone-100 
                         dark:bg-stone-950 py-4 flex flex-row justify-center lg:justify-between items-center
                         font-mono tracking-[.61em] uppercase transition-transform ${visibilityClassNamePostfix}`}>
            <DrawerMenu show={show && showDrawer} onDismiss={onDrawerDismiss}/>

            <div className='lg:hidden absolute top-1/2 -translate-y-1/2 left-0 pl-7 cursor-pointer'
                 onClick={onDrawerShow}
            >
                <BarsIcon className={'h-7 w-7'}/>
            </div>

            <a className='flex flex-row items-center gap-3 self-center' href='#'>
                <Logo includeMd5={false} className={'w-10 h-10 lg:w-12 lg:h-12'}/>
                <p className='font-mono font-medium text-xl md:text-3xl mt-2 tracking-normal text-black dark:text-white'>dpago.dev</p>
            </a>

            <div className='hidden lg:block'>
                <NavbarLinks smallPadding={true}/>
            </div>
        </nav>
    );
};