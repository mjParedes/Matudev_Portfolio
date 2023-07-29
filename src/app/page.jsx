import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Stack from '@/components/Stack'
import projectsDB from "/public/json/projects.json";


export default function Home() {
  return (
    <main className='min-h-screen '>
      <Hero />
      <About />
      <Projects projects={projectsDB.projects} />
      <Stack />
      <Contact />
    </main>
  )
}
