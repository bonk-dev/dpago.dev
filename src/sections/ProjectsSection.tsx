import SectionHeader from "../decors/SectionHeader.tsx";
import {useEffect, useState} from "react";

interface Link {
    to: string,
    label: string
}

interface ProjectProps {
    title: string,
    description: string,
    links: Link[]
}

const Project = ({ title, description }: ProjectProps) => {
    return (
        <article className='w-full bg-stone-100 p-8'>
            <header className='text-center font-semibold text-3xl'>
                <h2>{title}</h2>
            </header>

            {/*  TODO: Add badges  */}

            {/* TODO: Use DOMPurify */}
            <p dangerouslySetInnerHTML={{ __html: description }} className='mt-3'></p>

            <section>
                {/*  TODO: Add links  */}
            </section>
        </article>
    );
};

const ProjectsSection = () => {
    const [projects, setProjects] = useState<ProjectProps[]>([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(r => {
                r.json()
                    .then(j => {
                        setProjects(j as ProjectProps[]);
                    })
                    .catch(() => {
                        console.error("Could not parse projects as JSON.");
                    })
            })
            .catch(() => {
                console.error("Could not fetch projects.");
            })
    }, []);

    return (
        <section className='w-full h-screen px-44 pb-16'>
            <SectionHeader>
                Projects
            </SectionHeader>

            <div className='flex flex-row space-x-12'>
                {
                    projects.length > 0 ? (
                        projects.slice(0, 3).map((project: ProjectProps) => (
                            <Project title={project.title} description={project.description} links={project.links}/>
                        ))
                    ) : (
                        <p>Loading projects...</p>
                    )
                }
            </div>
        </section>
    );
};

export default ProjectsSection;