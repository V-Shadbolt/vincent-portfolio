import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { PageInfo } from '../../types/pageInfo'
import { Experiences } from '../../types/experiences'
import { Projects as ProjectType } from '../../types/projects'
import { Skills as SkillType } from '../../types/skills'
import { Socials } from '../../types/socials'
import { fetchPageInfo } from './api/fetchPageInfo'
import { fetchExperience } from './api/fetchExperience'
import { fetchSkills } from './api//fetchSkills'
import { fetchProjects } from './api//fetchProjects'
import { fetchSocials } from './api/fetchSocials'
import Image from 'next/image'
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

type Props = {
  pageInfo: PageInfo,
  experiences: Experiences[],
  skills: SkillType[],
  projects: ProjectType[],
  socials: Socials[],
  strapi: string,
}

const Home = ({pageInfo, experiences, projects, skills, socials, strapi}: Props) => {
  const title = `${pageInfo?.attributes?.name} - Portfolio`
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen scroll-smooth snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FF00FF]/80">
      <Head>
        <title>{title}</title>
      </Head>

      <Header socials={socials}/>

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} strapi={strapi}/>
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} strapi={strapi}/>
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} strapi={strapi}/>
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} strapi={strapi}/>
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} strapi={strapi}/>
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo}/>
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5">
          <div className="flex items-center justify-center ">
            <div className="relative h-10 w-10 filter grayscale hover:grayscale-0 curser-pointer">
              <Image 
                  src={`${strapi}`+`${pageInfo?.attributes?.heroImage?.data?.attributes?.url}`}
                  alt=''
                  fill
                  sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                  priority
                  className="rounded-full object-cover"
              />
            </div>
          </div>
        </footer>
      </Link>
    </div>    
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async() => {
  const pageInfo: any = await fetchPageInfo()
  const experiences: Experiences[] = await fetchExperience()
  const skills: SkillType[] = await fetchSkills()
  const projects: ProjectType[] = await fetchProjects()
  const socials: Socials[] = await fetchSocials()
  const strapi: any = serverRuntimeConfig.STRAPI_BASE_URL

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      strapi
    },
    revalidate: 10,
  }
}