import React from 'react'
import Image from 'next/image'
import { Projects } from '../../types/projects'
import Link from 'next/link'

type Props = {
    project: Projects
    strapi: any
}

function ProjectCard({project, strapi}: Props) {
  return (
    <div className="flex justify-left gap-4 mb-12">
        <div className="relative w-1/4 h-auto z-10 mb-2 mt-0">
            <Image 
                src={`${strapi}`+`${project?.attributes?.image?.data?.attributes?.url || ''}`}
                alt=''
                fill
                className="rounded-lg object-contain"
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
            />
        </div>
        <div className="relative z-10 w-3/4">
            <h3 className="font-medium leading-snug text-[#F58F7C]">
                <span>{project?.attributes?.title}</span>
            </h3>
            {project?.attributes?.linkToBuild && <Link href={project?.attributes?.linkToBuild} target="_blank">
                <span className="mt-2 text-sm leading-normal text-[#F2C4CE]">View Here</span>
            </Link>}
            <p className="mt-2 mb-2 text-sm leading-normal">
                {project?.attributes?.summary}
            </p>
            <div className="relative grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-y-2">
                {project?.attributes?.technologies?.data.map(technology => (
                    <div 
                    key={technology?.id}
                    className="relative h-7 w-7 md:h-8 md:w-8"
                    >
                        <Image 
                            src={`${strapi}`+`${technology?.attributes?.image?.data?.attributes?.url || ''}`}
                            alt=''
                            fill
                            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                            className="object-cover"
                        />
                    </div>
                ))}
            </div> 
        </div>
        
    </div>
  )
}

export default ProjectCard