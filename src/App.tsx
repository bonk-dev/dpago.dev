import HeroSection from "./sections/HeroSection.tsx";
import ProjectsSection from "./sections/ProjectsSection.tsx";
import ContactSection from "./sections/ContactSection.tsx";
import {Navbar} from "./components/Navbar.tsx";

function App() {
    return (
        <>
            {/* TODO: Hide navbar on hero section */}
            <Navbar/>
            <HeroSection/>
            <ProjectsSection/>
            <ContactSection/>
        </>
    )
}

export default App
