import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Stack from '@/components/Stack'
import projectsDB from "/public/json/projects.json";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main className='min-h-screen '>
      <Navbar />
      <Hero />
      <About id={"about"} />
      <Projects projects={projectsDB.projects} id={"projects"} />
      <Stack id={"skills"}/>
      <Contact id={"contact"}/>
      <Footer />
    </main>
  )
}
