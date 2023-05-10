import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skills as SkillType } from '../../types/skills'

type Props = {
    skills: SkillType[]
    strapi: any
}

function Skills({skills, strapi}: Props) {
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
    className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center scroll-smooth">
        <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
            Skills
        </h3>

        <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-5">
            {skills?.slice(0, skills.length/2).map(skill => (
                <Skill key={skill?.id} skill={skill} strapi={strapi} directionLeft/>
            ))}

            {skills?.slice(skills.length/2, skills.length).map(skill => (
                <Skill key={skill?.id} skill={skill} strapi={strapi}/>
            ))}
        </div>
    </motion.div>
  )
}

export default Skills