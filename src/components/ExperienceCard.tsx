import React from 'react'
import { Experiences } from '../../types/experiences'
import Image from 'next/image'

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
        <div className="z-10 sm:col-span-6 w-3/4">
            <h3 className="font-medium leading-snug text-[#F58F7C]">
                <span>{experience?.attributes?.jobTitle} · </span>
                <span className="inline-block">{experience?.attributes?.company}</span>
            </h3>
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <ul className="mt-2 text-sm leading-normal">
                {experience?.attributes?.points.map((point, i) => (
                    <li key={i}>{point?.point}</li>
                ))}
            </ul>
            <div className=" relative flex space-x-2 my-2">
                {experience?.attributes?.technologies?.data?.map(technology => (
                    <div 
                    key={technology?.id}
                    className="relative h-7 w-7 md:h-8 md:w-8"
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
        </div>
    </div>
  )
}

export default ExperienceCard