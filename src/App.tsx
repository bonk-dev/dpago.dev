import HeroSection from "./sections/HeroSection.tsx";
import ProjectsSection from "./sections/ProjectsSection.tsx";
import ContactSection from "./sections/ContactSection.tsx";
import {Navbar} from "./components/Navbar.tsx";
import {useState} from "react";

function App() {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <>
            <Navbar show={showNavbar}/>
            <HeroSection onScrolledByHeroLinks={setShowNavbar}/>
            <ProjectsSection/>
            <ContactSection/>
        </>
    )
}

export default App
