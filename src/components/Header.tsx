import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Socials } from '../../types/socials'

type Props = {
    socials: Socials[]
}

function Header({socials}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center scroll-smooth">
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            type: 'spring',
            duration: 1.5,
        }}
        className="flex flex-row items-center">
            {socials?.map((social) => (
                <SocialIcon 
                    key={social?.id}
                    url={social?.attributes?.url}
                    fgColor="grey" 
                    bgColor="transparent"
                />
            ))}
            
        </motion.div>

        <div className="absolute w-[50%] inset-0 bg-gradient-blue"/>
        
        
            <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                type: 'spring',
                duration: 1.5,
            }}
            className="flex flex-row items-center text-grey-300 curser-pointer">
                <SocialIcon 
                    className="cursor-pointer"
                    network="email"
                    fgColor="grey" 
                    bgColor="transparent"
                    url="#contact"
                />
                <Link href="#contact">
                    <p className="uppercase font-bold hidden md:inline-flex text-sm leading-[30px] text-grey-400" >
                        Get In Touch
                    </p>
                </Link>
                
            </motion.div>
    </header>
  )
}

export default Header