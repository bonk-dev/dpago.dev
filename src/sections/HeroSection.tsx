import Logo from "../components/Logo.tsx";
import {NavbarLinks} from "../components/Navbar.tsx";
import {useCallback, useEffect, useRef, useState} from "react";

interface ScrolledByProps {
    onScrolledByHeroLinks: (areHeroLinksHidden: boolean) => void
}

const HeroLinks = ({ onScrolledByHeroLinks }: ScrolledByProps) => {
    const linksContainerRef = useRef<HTMLDivElement>(null);
    const [lastAreHeroLinksHidden, setLastAreHeroLinksHidden] = useState<boolean|null>(null);

    const checkPosition = useCallback(() => {
        if (linksContainerRef.current == null) {
            return;
        }

        const rect = linksContainerRef.current.getBoundingClientRect();
        if (rect.y < 0 && !lastAreHeroLinksHidden) {
            setLastAreHeroLinksHidden(true);
            onScrolledByHeroLinks(true);
        }
        else if (rect.y >= 0 && lastAreHeroLinksHidden) {
            setLastAreHeroLinksHidden(false);
            onScrolledByHeroLinks(false);
        }

    }, [onScrolledByHeroLinks, lastAreHeroLinksHidden]);

    useEffect(() => {
        if (document.readyState !== 'complete') {
            window.addEventListener('DOMContentLoaded', checkPosition);
        }
        else {
            checkPosition();
        }

        document.addEventListener('scroll', checkPosition);

        return () => {
            document.removeEventListener('scroll', checkPosition);
            document.removeEventListener('DOMContentLoaded', checkPosition);
        };
    }, [checkPosition, onScrolledByHeroLinks]);

    return (
        <div className='uppercase flex flex-col lg:block lg:text-xl xl:text-2xl font-mono tracking-[.61em]'
             ref={linksContainerRef}
        >
            <NavbarLinks smallPadding={false}/>
        </div>
    );
};

//lg:px-16 xl:px-52 2xl:px-80
// TODO: Add decors
const HeroSection = ({ onScrolledByHeroLinks }: ScrolledByProps) => {
    return (
        <section className='w-full h-screen flex flex-col items-center justify-center gap-12'>
            <Logo includeMd5={true} className='w-28 lg:w-52 h-auto'/>

            <div className='flex flex-col justify-center items-center'>
                <h1 className='uppercase font-mono font-medium text-4xl lg:text-5xl'>
                    Dawid Pągowski
                </h1>
                <h2 className='uppercase font-mono text-xl lg:text-2xl tracking-[.49em] lg:tracking-[.61em]'>
                    Full Stack Dev
                </h2>
            </div>

            <HeroLinks onScrolledByHeroLinks={onScrolledByHeroLinks}/>
        </section>
    );
};

export default HeroSection;