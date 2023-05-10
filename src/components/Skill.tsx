import React from 'react'
import { motion } from 'framer-motion'
import { Skills } from '../../types/skills'
import Image from 'next/image'

type Props = {
    skill: Skills
    directionLeft?: boolean
    strapi: any
}

function Skill({skill, directionLeft, strapi}: Props) {
  return (
    <div className="group relative flex curser-pointer">
        <motion.div
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        transition={{duration: 1,}}
        viewport={{once: true,}}
        className="relative w-12 h-12 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out">
            <Image 
                src={`${strapi}`+`${skill?.attributes?.image?.data?.attributes?.url}`}
                alt=''
                fill
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                className="object-cover"
            />
        </motion.div>
    </div>
  )
}

export default Skill