'use client';

import Link from 'next/link';
import Divider from '@/components/divider';
import { useEffect, useState } from 'react';
import Hero from './hero';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { HeroId, ProjectTitle } from '@/lib/types';
import ProjectHeading from './project-heading';

export default function ProjectSection () {
    const [ heroContent, setHeroContent ] = useState<HeroId>('twdor');

    const handleHover = (projectId: HeroId) => {
        setHeroContent('twdor');
    };
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('Projects');
        }
    }, [inView, setActiveSection, timeOfLastClick]);

    return (<section id='projects' ref={ref} className='scroll-mt-[100rem] flex flex-col items-center gap-8'>
        {/* Hero */}
        <motion.div 
            className={`relative flex flex-col justify-center items-center ${
                heroContent === 'twdor' ? '' : 'text-transparent pointer-events-none'
            }`} style={{
                color: heroContent === 'twdor' ? '' : 'transparent',
                pointerEvents: heroContent === 'twdor' ? 'auto' : 'none'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className='flex text-uppercase justify-between items-center w-full z-40'>
                {/* <Link href='#contact-form' className='highlight w-1/3'>Contact</Link> */}
                <span className='w-1/3 cursor-default'>Hi! My name is</span>
                <Link href='/CV' className='highlight w-1/3 text-right'>Download CV</Link>
            </div>
            <div className='flex flex-col gap-4 items-center relative pt-0 pb-3'>
                <div className='text-9xl -pb-4 -mb-4 font-semibold text-center cursor-default'>Tudor Popescu</div>
                <div className='flex gap-8 text-md font-medium'>
                    {/* Sometimes<br/>known as<br/>Tudor Popescu<br/>(Contact) */}
                </div>
            </div>
            <div className='flex text-center justify-between items-center w-full'>
                <span>X</span>
                <span>I am a Front-End Developer with 3 years experience building & designing web apps.</span>
                <span>X</span>
                {/* <Link href='/contact' className='w-1/3'>I am a front-end developer</Link>
                <span className='w-1/3 text-center cursor-default'>with 3 years experience</span>
                <Link href='/CV' className='w-1/3 text-right'>building & designing web apps</Link> */}
            </div>
            {/* Project Hero */}
            {heroContent !== 'twdor' && 
            <div className='absolute inset-0 z-30'>
                <Hero projectId={heroContent} />
            </div>
            }
        </motion.div>

        <Divider heading='Project Lineup' /> 

        {/* Headliners */}
        <div className='flex gap-8'>
            <ProjectHeading projectId='kronos' className='text-8xl font-medium' onHover={(projectId) => handleHover(projectId)} />
            <ProjectHeading projectId='wejam' className='text-8xl font-medium' onHover={(projectId) => handleHover(projectId)} />   
            {/* <Link href='./project/1' className='text-8xl highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Kronos</Link> */}
            {/* <div className='text-8xl highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>WeJam</div> */}
        </div>

        {/* Tier 2 */}
        <div className='flex flex-wrap gap-x-8 gap-y-4 justify-center'>
            <ProjectHeading projectId='wolfpack' className='text-5xl font-medium' onHover={(projectId) => handleHover(projectId)} /> 
            <ProjectHeading projectId='bvr' className='text-5xl font-medium' onHover={(projectId) => handleHover(projectId)} /> 
        </div>

        {/* Tier 3 - by stage */}
        <div className='flex gap-8 justify-center w-full text-center mt-2'>
            <div className='flex flex-col gap-4 w-full'>
                <Divider heading='UX Stage' />
                <ProjectHeading projectId='wolf-mentorship' className='text-3xl font-medium' onHover={(projectId) => handleHover(projectId)} />
                <ProjectHeading projectId='soundr-brand' className='text-3xl font-medium' onHover={(projectId) => handleHover(projectId)} />
                <ProjectHeading projectId='counselor-landing' className='text-3xl font-medium' onHover={(projectId) => handleHover(projectId)} />
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <Divider heading='Logo Stage' />
                <ProjectHeading projectId='ftt' className='text-3xl font-medium' onHover={(projectId) => handleHover(projectId)} />
                <ProjectHeading projectId='d&m' className='text-3xl font-medium' onHover={(projectId) => handleHover(projectId)} />
                <ProjectHeading projectId='vosports' className='text-3xl font-medium' onHover={(projectId) => handleHover(projectId)} />
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <Divider heading='Graphic Design Stage' />
                <ProjectHeading projectId='music-artworks' className='text-3xl font-medium' onHover={(projectId) => handleHover(projectId)} />
                <ProjectHeading projectId='soundr-poster' className='text-3xl font-medium' onHover={(projectId) => handleHover(projectId)} />
                <ProjectHeading projectId='wolfys-brand' className='text-3xl font-medium' onHover={(projectId) => handleHover(projectId)} />
            </div>
        </div>
    </section>);
}