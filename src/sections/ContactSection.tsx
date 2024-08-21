import SectionHeader from "../components/SectionHeader.tsx";
import AtSymbolIcon from "../assets/icons/AtSymbolIcon.tsx";
import GitHubIcon from "../assets/icons/GitHubIcon.tsx";
import React from "react";

interface ProseSectionProps {
    children: React.ReactNode,
    header: string
}

const ProseSection = ({ children, header }: ProseSectionProps) => {
    return (
        <section className='prose'>
            <header>
                <h3>{header}</h3>
            </header>
            <p>
                {children}
            </p>
        </section>
    );
};

const ContactSection = () => {
    return (
        <section className='w-full min-h-screen px-80 pb-16'>
            <SectionHeader>
                Contact
            </SectionHeader>

            <div className='flex flex-row justify-between'>
                <div>
                    <ProseSection header={'CONNECT WITH ME'}>
                        I'm excited to explore new opportunities and collaborate on innovative projects. As an experienced
                        developer, I'm constantly seeking ways to apply my skills and expertise to contribute to your
                        organization's goals.
                    </ProseSection>

                    <ProseSection header={'Available for New Challenges'}>
                        Whether you have a specific project in mind or are simply interested in discussing potential
                        partnerships, I welcome the chance to connect. I'm currently open to new positions and assignments that align with my capabilities and passion for problem-solving.
                    </ProseSection>

                    <ProseSection header={"Let's Talk"}>
                        Please don't hesitate to reach out to me at contact@dpago.dev or through my GitHub profile at
                        bonk-dev. I look forward to the opportunity to learn more about your needs and discuss how I can be
                        of assistance.

                        I'm eager to put my skills and experience to work for you. Together, I'm confident we can achieve
                        remarkable results. I appreciate you taking the time to consider how I might be a valuable addition
                        to your team.
                    </ProseSection>
                </div>

                <section className='text-purple-600 underline font-semibold text-4xl'>
                    <div className='flex flex-row items-center gap-2'>
                        <AtSymbolIcon width={'3rem'} height={'3rem'}/>
                        <a href='mailto:contact@dpago.dev'>contact@dpago.dev</a>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <GitHubIcon width={'3rem'} height={'3rem'}/>
                        <a href='https://github.com/bonk-dev'>bonk-dev</a>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default ContactSection;