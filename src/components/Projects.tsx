import React from 'react'
import ProjectCard from './ProjectCard'
import { Projects } from '../../types/projects'

type Props = {
    projects: Projects[]
    strapi: any
}

function Projects({projects, strapi}: Props) {

  return (
    <div>
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gradient-to-r from-[#F58F7C]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#F2C4CE] lg:sr-only">Projects</h2>
        </div>
        <div>
            <div className="relative pb-1 transition-all">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#F58F7C]/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                {projects?.map(project => (
                    <ProjectCard key={project?.id} project={project} strapi={strapi}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects