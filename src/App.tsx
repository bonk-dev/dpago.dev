import HeroSection from "./sections/HeroSection.tsx";
import ProjectsSection from "./sections/ProjectsSection.tsx";
import ContactSection from "./sections/ContactSection.tsx";
import {Navbar} from "./components/Navbar.tsx";
import {useState} from "react";

const Background = () => {
    return (
        <div aria-hidden='true' className='-z-10 bg-white dark:bg-zinc-900 top-0 left-0 bottom-0 right-0 fixed'></div>
    );
};

function App() {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <>
            <Background/>
            <div className='selection:bg-violet-300 dark:selection:bg-violet-800 dark:text-white'>
                <Navbar show={showNavbar}/>

                <main>
                    <HeroSection onScrolledByHeroLinks={setShowNavbar}/>
                    <ProjectsSection/>
                    <ContactSection/>
                </main>
            </div>
        </>
    )
}

export default App
