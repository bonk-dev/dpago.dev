import Logo from "./Logo.tsx";
import EditPencilIcon from "../assets/icons/EditPencilIcon.tsx";
import GitHubIcon from "../assets/icons/GitHubIcon.tsx";
import AtSymbolIcon from "../assets/icons/AtSymbolIcon.tsx";

interface NavbarLinksProps {
    smallPadding: boolean
}

const NavbarLinkBackground = () => {
    return (
        <span className='absolute top-0 bottom-0 left-0 h-full w-0 transition-[width] inline-block bg-violet-700 -z-10'
              aria-hidden='true'>
        </span>
    );
};

export const NavbarLinks = ({smallPadding}: NavbarLinksProps) => {
    const paddingClass = smallPadding
        ? 'px-10 py-5'
        : 'px-12 py-5';
    const generalClass = 'inline-block relative [&>span]:hover:w-full transition-colors border-violet-700 border-r-2 border-solid';
    const hoverClass = ' hover:text-white';
    const className = `${paddingClass} ${generalClass} ${hoverClass}`;

    return (
        <>
            <a href='#' className={className}>
                <NavbarLinkBackground/>
                <EditPencilIcon className='inline mr-3 w-7 h-7'/>
                Projekty
            </a>
            <a href='#' className={className}>
                <NavbarLinkBackground/>
                <GitHubIcon className='inline mr-3 w-7 h-7'/>
                GitHub
            </a>
            <a href='#' className={`${className} border-none`}>
                <NavbarLinkBackground/>
                <AtSymbolIcon className='inline mr-3 w-7 h-7'/>
                Kontakt
            </a>
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
        <nav className={`fixed top-0 left-0 right-0 px-80 bg-stone-100 py-4 flex flex-row justify-between items-center +
                        text-xl font-mono tracking-[.61em] uppercase transition-transform ${visibilityClassNamePostfix} `}>
            <a className='flex flex-row items-center gap-3' href='/'>
                <Logo includeMd5={false} width={'55'} height={'48'}/>
                <p className='font-mono font-medium text-3xl mt-2 tracking-normal'>dpago.dev</p>
            </a>

            <div>
                <NavbarLinks smallPadding={true}/>
            </div>
        </nav>
    );
};