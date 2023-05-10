import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experiences } from '../../types/experiences'

type Props = {
    experiences: Experiences[]
    strapi: any
}

function WorkExperience({experiences, strapi}: Props) {
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
    className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth">
        <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
            Experience
        </h3>

        <div className="w-screen h-3/4 md:h-2/3 md:w-full text-left pb-5 md:pb-10 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FF00FF]/80">
            {experiences?.map(experience => (
                <ExperienceCard key={experience?.id} experience={experience} strapi={strapi}/>
            ))}
        </div>
    </motion.div>
  )
}

export default WorkExperience