import React from 'react'
import { motion } from 'framer-motion'
import { Projects } from '../../types/projects'
import Image from 'next/image'

type Props = {
    projects: Projects[]
    strapi: any
}

function Projects({projects, strapi}: Props) {

  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    transition={{
        duration: 1.5,
    }}
    whileInView={{
        opacity: 1,
    }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 scroll-smooth">
        <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FF00FF]/80">
            {projects?.map((project, i) => (
                <div key={project?.id} className="relative w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen">
                    <motion.div
                    initial={{
                        y: -300,
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{duration: 1.2,}}
                    viewport={{once: true,}}
                    className="relative h-28 xl:h-80 md:h-72">
                        <Image 
                            src={`${strapi}`+`${project?.attributes?.image?.data?.attributes?.url}`}
                            alt=''
                            fill
                            sizes="100vw,50vw,33vw"
                            className="object-contain"
                        />
                    </motion.div>
                            
                    <div className="relative space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
                            <span className="underline decoration-[#FF00FF]/50">
                                Project {i+1} of {projects.length}: 
                            </span> 
                            {` ${project?.attributes?.title}`}
                        </h4>
                        <div className="flex items-center space-x-2 justify-center">
                            {project?.attributes?.technologies?.data.map(technology => (
                                <div 
                                key={technology?.id}
                                className="relative h-10 w-10"
                                >
                                    <Image 
                                        src={`${strapi}`+`${technology?.attributes?.image?.data?.attributes?.url}`}
                                        alt=''
                                        fill
                                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>  
                        <p className="text-sm md:text-md lg:text-lg text-justify">
                            {project?.attributes?.summary}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className="w-full absolute top-[20%] md:top-[30%] bg-[#FF00FF]/10 left-0 h-[500px] -skew-y-12"/>

    </motion.div>
  )
}

export default Projects