import SectionHeader from "../decors/SectionHeader.tsx";
import React, {useEffect, useState} from "react";
import LinkIcon from "../assets/icons/LinkIcon.tsx";
import Css3BadgeIcon from "../assets/icons/Css3BadgeIcon.tsx";
import TypeScriptBadgeIcon from "../assets/icons/TypeScriptBadgeIcon.tsx";
import ReactJsBadgeIcon from "../assets/icons/ReactJsBadgeIcon.tsx";

const matchBadgeToIcon = (badgeText: string): React.ReactNode | null => {
    switch (badgeText) {
        case "REACT":
            return <ReactJsBadgeIcon width={'21'} height={'19'}/>
        case "TYPESCRIPT":
            return <TypeScriptBadgeIcon/>
        case "CSS3":
            return <Css3BadgeIcon/>
        default:
            return null;
    }
};

interface BadgeProps {
    icon?: React.ReactNode,
    children: React.ReactNode
}

const Badge = ({ icon, children }: BadgeProps) => {
    return (
        <div className='flex flex-row items-center justify-center py-1.5 px-3 bg-violet-700 text-white font-medium text-sm space-x-1'>
            {icon}
            <span>
                {children}
            </span>
        </div>
    );
};

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
    links: Link[],
    badges: string[]
}

const Project = ({ title, description, links, badges }: ProjectProps) => {
    return (
        <article className='flex-1 bg-stone-100 p-8 flex flex-col'>
            <header className='text-center font-semibold text-3xl'>
                <h2>{title}</h2>
            </header>

            <section className='flex flex-row justify-center items-center space-x-2 mt-2'>
                {
                    badges.length > 0 ? (
                        badges.map(b =>
                            <Badge icon={matchBadgeToIcon(b)}>{b}</Badge>
                        )
                    ) : null
                }
            </section>

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
        <section className='w-full min-h-screen px-44 pb-16 flex flex-col'>
            <SectionHeader>
                Projects
            </SectionHeader>

            <div className='flex flex-row flex-wrap gap-12'>
                {
                    projects.length > 0 ? (
                        projects.slice(0, 3).map((project: ProjectProps) => (
                            <Project
                                title={project.title}
                                description={project.description}
                                links={project.links}
                                badges={project.badges}
                            />
                        ))
                    ) : (
                        <p>Loading projects...</p>
                    )
                }
            </div>

            <div className='flex flex-1 justify-self-center self-center items-center mt-20'>
                <p className='text-4xl text-gray-500'>Many more projects on the horizon</p>
            </div>
        </section>
    );
};

export default ProjectsSection;