import Logo from "./decors/Logo.tsx";
import EditPencilIcon from "./assets/icons/EditPencilIcon.tsx";
import GitHubIcon from "./assets/icons/GitHubIcon.tsx";
import AtSymbolIcon from "./assets/icons/AtSymbolIcon.tsx";

// TODO: Add icons
const HeroLinks = () => {
    return (
        <div className='justify-self-center uppercase text-2xl font-mono tracking-[.61em]'>
            <a href='#' className='pr-8 border-purple-700 border-r-2 border-solid flex-row justify-center items-center'>
                <EditPencilIcon className='inline mr-3 w-9 h-7'/>
                Projekty
            </a>
            <a href='#' className='pl-12 pr-8 border-purple-700 border-r-2 border-solid'>
                <GitHubIcon className='inline mr-3 w-9 h-9'/>
                GitHub
            </a>
            <a href='#' className='pl-12'>
                <AtSymbolIcon className='inline mr-3 w-9 h-7'/>
                Kontakt
            </a>
        </div>
    );
};

// TODO: Add decors
const HeroSection = () => {
    return (
        <section className='w-full h-screen grid grid-rows-[minmax(0,_1fr)_200px_minmax(0,_1fr)]'>
            <div className='flex justify-center items-end'>
                <Logo includeMd5={true} className='w-52 h-auto'/>
            </div>

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

function App() {
  return (
      <>
        <HeroSection/>
      </>
  )
}

export default App
