import React from 'react'
import { Experiences } from '../../types/experiences'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    experience: Experiences
    strapi: any
}

function ExperienceCard({experience, strapi}: Props) {

  return (
    <div className="flex justify-left gap-4 mb-12">
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-[#F2C4CE] w-1/4">
            {new Date(experience?.attributes?.dateStarted).getFullYear()} -{" "} 
                {experience?.attributes?.isCurrentlyWorkingHere 
                ? "Present"
                : new Date(experience?.attributes?.dateEnded).getFullYear()}
        </header>
        <div className="z-10 w-3/4">
            <h3 className="font-medium leading-snug text-[#F58F7C]">
                <span>{experience?.attributes?.jobTitle} · </span>
                <span className="inline-block">{experience?.attributes?.company}</span>
            </h3>
            {experience?.attributes?.linkToSite && <Link href={experience?.attributes?.linkToSite} target="_blank">
                <span className="mt-2 text-sm leading-normal text-[#F2C4CE]">Company Website</span>
            </Link>}
            <ul className="mt-2 mb-2 text-sm leading-normal">
                {experience?.attributes?.points.map((point, i) => (
                    <li key={i}>{point?.point}</li>
                ))}
            </ul>
            <div className="relative grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-y-2">
                {experience?.attributes?.technologies?.data?.map(technology => (
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

export default ExperienceCard