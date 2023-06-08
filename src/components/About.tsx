import React from 'react'
import { PageInfo } from '../../types/pageInfo'

type Props = {
    pageInfo: PageInfo
}

function About({pageInfo}: Props) {

    const infos = pageInfo?.attributes?.backgroundInformation.split(/\r?\n/)
  return (
    <div>
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gradient-to-r from-[#F58F7C]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#F2C4CE] lg:sr-only">About</h2>
        </div>
        <div>
            <h1 className=" hidden lg:block mb-4 text-lg font-bolt tracking-tight text-[#D6D6D6] text-center">
                Here is a <span className="text-sm text-[#F2C4CE]">little</span> background
            </h1>
            <div className="relative pb-1">
                {infos?.map((info, i) => (
                    <p key={i} className="mb-4 text-sm">
                        {info}
                    </p>
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default About