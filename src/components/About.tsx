import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../../types/pageInfo'
import Image from 'next/image'

type Props = {
    pageInfo: PageInfo
    strapi: any
}

function About({pageInfo, strapi}: Props) {

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
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center scroll-smooth">
        <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
            About
        </h3>

        <motion.div
        initial={{
            x: -200,
            opacity: 0,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        transition={{duration: 1.2,}}
        viewport={{once: true,}}
        className="relative -mb-24 md:mb-0 flex-shrink-0 w-56 h-56 md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]">
            <Image 
                src={`${strapi}`+`${pageInfo?.attributes?.profilePic?.data?.attributes?.url}`}
                alt=''
                fill
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                className="rounded-full object-cover md:rounded-lg "
            />
        </motion.div>

        <div className="space-y-5 md:space-y-10 px-0 md:px-10">
            <h4 className="text-xl md:text-4xl font-semibold">
                Here is a <span className="underline decoration-[#FF00FF]/50">little</span> background
            </h4>
            <p className="text-sm md:text-lg lg:text-lg text-justify">
                {pageInfo?.attributes?.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}

export default About