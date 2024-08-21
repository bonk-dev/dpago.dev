import Logo from "./Logo.tsx";
import EditPencilIcon from "../assets/icons/EditPencilIcon.tsx";
import GitHubIcon from "../assets/icons/GitHubIcon.tsx";
import AtSymbolIcon from "../assets/icons/AtSymbolIcon.tsx";

interface NavbarLinksProps {
    smallPadding: boolean
}

export const NavbarLinks = ({ smallPadding }: NavbarLinksProps) => {
    const paddingClass = smallPadding
        ? 'pl-10'
        : 'pl-12';

    return (
        <>
            <a href='#' className='pr-8 border-purple-700 border-r-2 border-solid'>
                <EditPencilIcon className='inline mr-3 w-9 h-7'/>
                Projekty
            </a>
            <a href='#' className={`${paddingClass} pr-8 border-purple-700 border-r-2 border-solid`}>
                <GitHubIcon className='inline mr-3 w-9 h-9'/>
                GitHub
            </a>
            <a href='#' className={paddingClass}>
                <AtSymbolIcon className='inline mr-3 w-9 h-7'/>
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