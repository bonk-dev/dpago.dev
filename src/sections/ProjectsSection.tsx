import SectionHeader from "../decors/SectionHeader.tsx";
import {useEffect, useState} from "react";
import LinkIcon from "../assets/icons/LinkIcon.tsx";

interface LinkItemProps {
    to: string,
    label: string
}

const LinkItem = ({ to, label }: LinkItemProps) => {
    return (
        <div className='flex flex-row items-center space-x-1'>
            <LinkIcon width={'18'} height={'18'}/>
            <a className='text-purple-600 font-medium' href={to}>{label}</a>
        </div>
    );
};

interface Link {
    to: string,
    label: string
}

interface ProjectProps {
    title: string,
    description: string,
    links: Link[]
}

const Project = ({ title, description, links }: ProjectProps) => {
    return (
        <article className='w-full bg-stone-100 p-8 flex flex-col'>
            <header className='text-center font-semibold text-3xl'>
                <h2>{title}</h2>
            </header>

            {/*  TODO: Add badges  */}

            {/* TODO: Use DOMPurify */}
            <p dangerouslySetInnerHTML={{ __html: description }} className='mt-3'></p>

            <section className='mt-8 flex flex-col justify-end h-full bottom-0'>
                {links.length > 0 ? (
                    links.map(l =>
                        <LinkItem label={l.label} to={l.to}/>
                    )
                ) : null}
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