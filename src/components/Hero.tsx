import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { PageInfo } from '../../types/pageInfo'
import Image from 'next/image'

type Props = {
    pageInfo: PageInfo
    strapi: any
}

function Hero({pageInfo, strapi}: Props) {
    const [text, count] = useTypewriter({
        words: [
        `Hi, The Name's ${pageInfo?.attributes?.name}`, 
        "Guy-who-loves-coffee.tsx", 
        "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden scroll-smooth">
        <BackgroundCircles />
        <div className="relative h-32 w-32 mx-auto">
            <Image 
                src={`${strapi}`+`${pageInfo?.attributes?.heroImage?.data?.attributes?.url}`}
                alt=''
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                priority
            />
        </div>
        
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">{pageInfo?.attributes?.role}</h2>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#FF00FF" />
            </h1>

            <div className="pt-5">
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">Projects</button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Hero