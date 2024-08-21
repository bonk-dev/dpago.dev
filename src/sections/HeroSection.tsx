import Logo from "../components/Logo.tsx";
import {NavbarLinks} from "../components/Navbar.tsx";

const HeroLinks = () => {
    return (
        <div className='uppercase text-2xl font-mono tracking-[.61em] self-start'>
            <NavbarLinks smallPadding={false}/>
        </div>
    );
};

// TODO: Add decors
const HeroSection = () => {
    return (
        <section className='w-full h-screen grid grid-rows-[minmax(0,_1fr)_200px_minmax(0,_1fr)] items-center place-items-center'>
            <Logo includeMd5={true} className='w-52 h-auto items-end self-end'/>

            <div className='flex flex-col justify-center items-center'>
                <h1 className='uppercase font-mono font-medium text-5xl'>
                    Dawid Pągowski
                </h1>
                <h2 className='uppercase font-mono text-2xl tracking-[.61em]'>
                    Full Stack Dev
                </h2>
            </div>

            <HeroLinks/>
        </section>
    );
};

export default HeroSection;