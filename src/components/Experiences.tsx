import React from 'react'
import ExperienceCard from './ExperienceCard'
import { Experiences as ExperienceType} from '../../types/experiences'
import Link from 'next/link'
import { ResumeDoc } from '../../types/resume'

type Props = {
    experiences: ExperienceType[]
    resume: ResumeDoc
    strapi: any
}

function Experiences({experiences, resume, strapi}: Props) {

  return (
    <div>
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gradient-to-r from-[#F58F7C]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#F2C4CE] lg:sr-only">Experience</h2>
        </div>
        <div>
            <div className="relative pb-1 transition-all">
                {experiences?.map(experience => (
                    <ExperienceCard key={experience?.id} experience={experience} strapi={strapi}/>
                ))}
            </div>
        </div>
        <div className="flex justify-center pt-3">
            <Link href={`${strapi}`+`${resume?.attributes?.resume?.data?.attributes?.url}`} target="_blank">
                <span className="font-semibold leading-tight text-[#D6D6D6]">View Full Resume</span>
            </Link>
        </div>
    </div>
    
  )
}

export default Experiences