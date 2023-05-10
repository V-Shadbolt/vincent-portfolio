import React from 'react'
import { motion } from 'framer-motion'
import { Experiences } from '../../types/experiences'
import Image from 'next/image'

type Props = {
    experience: Experiences
    strapi: any
}

function ExperienceCard({experience, strapi}: Props) {
  return (
    <article className="flex drop-shadow-xl flex-col rounded-3xl items-center space-y-0 flex-shrink-0 w-72  md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-5 md:p10 hover:opacity-100 opacity-40 curser-pointer transition-opacity duration-200 overflow-hidden">
        <motion.div
        initial={{
            y: -100,
            opacity: 0,
        }}
        whileInView={{
            y: 0,
            opacity: 1,
        }}
        transition={{duration: 1.2,}}
        viewport={{once: true,}}
        className="relative md:invisible xl:visible md:h-0 w-28 h-28 md:w-0 xl:w-[150px] xl:h-[150px] mb-2">
            <Image 
                src={`${strapi}`+`${experience?.attributes?.companyImage?.data?.attributes?.url }`}
                alt=''
                fill
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                className="rounded-full object-cover object-center"
            />
        </motion.div>
        
        <div className="w-full px-0 md:px-10 md:flex md:justify-between items-center">
            <h4 className="text-lg md:text-3xl font-light">{experience?.attributes?.jobTitle}</h4>
            <p className="ont-bold text-md md:text-2xl mt-1">{experience?.attributes?.company}</p>
            <div className=" relative flex space-x-2 my-2">
                {experience?.attributes?.technologies?.data?.map(technology => (
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
            <p className="uppercase py-2 md:py-5 text-gray-300 text-sm md:text-lg">
                {new Date(experience?.attributes?.dateStarted).toDateString()} -{" "} 
                {experience?.attributes?.isCurrentlyWorkingHere 
                ? "Present"
                : new Date(experience?.attributes?.dateEnded).toDateString()}
            </p>
            <ul className="px-0 md:px-10 list-disc space-y-2 ml-0 text-justify text-sm md:text-lg pl-5 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FF00FF]/80">
                {experience?.attributes?.points.map((point, i) => (
                    <li key={i}>{point?.point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard