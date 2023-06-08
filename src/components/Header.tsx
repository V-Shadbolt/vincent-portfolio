import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import { Socials } from '../../types/socials'
import { PageInfo } from '../../types/pageInfo'
import { useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'

type Props = {
    socials: Socials[]
    pageInfo: PageInfo
    strapi: any
}

function Header({socials, pageInfo, strapi}: Props) {

    const rotatingTexts = pageInfo?.attributes?.rotatingTexts?.map(rotatingText => {
        return rotatingText?.rotatingText
    })

    const [text, count] = useTypewriter({
        words: rotatingTexts,
        loop: true,
        delaySpeed: 2000,
    })

    

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-[#F58F7C] sm:text-5xl">
                    <Link href="/">{pageInfo?.attributes?.name}</Link>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-[#D6D6D6] sm:text-xl">
                    {pageInfo?.attributes?.role}
                </h2>
            </div>
            <div className="flex gap-3">
                <div className="relative mt-4 h-32 w-32 mx-w-xs">
                    <Image 
                        src={`${strapi}`+`${pageInfo?.attributes?.heroImage?.data?.attributes?.url}`}
                        alt=''
                        fill
                        className="rounded-lg object-cover"
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                        priority
                    />
                    
                </div>
                <p className="relative hidden lg:block mt-4 w-2/3 leading-normal items-center text-[#F2C4CE]">
                    {text}
                </p>
            </div>
            <div className="hidden lg:block ">
                <div className="mt-16">
                    <Link href="#about">
                        <button className="heroButton relative">About</button>
                    </Link>
                </div>
                <div className="pt-5">
                    <Link href="#experience">
                        <button className="heroButton relative">Experience</button>
                    </Link>
                </div>
                <div className="pt-5">
                    <Link href="#projects">
                        <button className="heroButton relative">Projects</button>
                    </Link>
                </div>
            </div>
        </div>

        <div className="ml-1 mt-8 flex items-center">
            {socials?.map((social) => (
                <SocialIcon 
                    key={social?.id}
                    url={social?.attributes?.url}
                    fgColor="#F2C4CE" 
                    bgColor="transparent"
                />
            ))}
            
        </div>
    </header>
  )
}

export default Header