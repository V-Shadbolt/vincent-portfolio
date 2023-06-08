import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { PageInfo } from '../../types/pageInfo'
import { Experiences as ExperienceType} from '../../types/experiences'
import { Projects as ProjectType } from '../../types/projects'
import { Socials } from '../../types/socials'
import { fetchPageInfo } from './api/fetchPageInfo'
import { fetchExperience } from './api/fetchExperience'
import { fetchProjects } from './api//fetchProjects'
import { fetchSocials } from './api/fetchSocials'
import getConfig from 'next/config';
import { ResumeDoc } from '../../types/resume'
import { fetchResume } from './api/fetchResume'

const { serverRuntimeConfig } = getConfig();

type Props = {
  pageInfo: PageInfo,
  resume: ResumeDoc,
  experiences: ExperienceType[],
  projects: ProjectType[],
  socials: Socials[],
  strapi: string,
}

const Home = ({pageInfo, resume, experiences, projects, socials, strapi}: Props) => {
  const title = `${pageInfo?.attributes?.name} - Portfolio`
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">

      <Head>
        <title>{title}</title>
      </Head>

      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header socials={socials} pageInfo={pageInfo} strapi={strapi}/>
        
        <div className="pt-24 lg:w-1/2 lg:py-24">

          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <About pageInfo={pageInfo}/>
          </section>

          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <Experiences experiences={experiences} strapi={strapi} resume={resume}/>
          </section>

          <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <Projects projects={projects} strapi={strapi}/>
          </section>

          <footer className="w-full pb-16 text-xs text-[#4F4F51] sm:pb-0 text-left">
            <p>Design inspired by {' '}
              <Link href="https://brittanychiang.com/" className="font-medium text-[#F58F7C]/75 hover:text-[#F2C4CE] focus-visible:text-[#F2C4CE]">
                  <button>Brittany Chiang</button>
              </Link>
              {' '} and coded in {' '}
              <Link href="https://code.visualstudio.com/" className="font-medium text-[#F58F7C]/75 hover:text-[#F2C4CE] focus-visible:text-[#F2C4CE]">
                  <button> Visual Studio Code</button>
              </Link>
              . Built with {' '}
              <Link href="https://nextjs.org/" className="font-medium text-[#F58F7C]/75 hover:text-[#F2C4CE] focus-visible:text-[#F2C4CE]">
                  <button> Next.js</button>
              </Link>
              {' '} and {' '}
              <Link href="https://tailwindcss.com/" className="font-medium text-[#F58F7C]/75 hover:text-[#F2C4CE] focus-visible:text-[#F2C4CE]">
                  <button> Tailwind CSS</button>
              </Link>
              . Selfhosted with a {' '}
              <Link href="https://strapi.io/" className="font-medium text-[#F58F7C]/75 hover:text-[#F2C4CE] focus-visible:text-[#F2C4CE]">
                  <button> Strapi</button>
              </Link>
              {' '} Backend. All text is set in the {' '}
              <Link href="https://rsms.me/inter/" className="font-medium text-[#F58F7C]/75 hover:text-[#F2C4CE] focus-visible:text-[#F2C4CE]">
                  <button>Inter</button>
              </Link>
              {' '} typeface
            </p>
          </footer>

        </div>
      </div>
    </div>    
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async() => {
  const pageInfo: any = await fetchPageInfo()
  const resume: any = await fetchResume()
  const experiences: ExperienceType[] = await fetchExperience()
  const projects: ProjectType[] = await fetchProjects()
  const socials: Socials[] = await fetchSocials()
  const strapi: any = serverRuntimeConfig.STRAPI_BASE_URL

  return {
    props: {
      pageInfo,
      resume,
      experiences,
      projects,
      socials,
      strapi
    },
    revalidate: 30,
  }
}