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
    <main className='min-h-screen bg-gray-900'>
      <Navbar />
      <Hero />
      <hr/>
      <About id={"about"} />
      <hr />
      <Projects projects={projectsDB.projects} id={"projects"} />
      <hr />
      <Stack id={"skills"}/>
      <hr />
      <Contact id={"contact"}/>
      <hr />
      <Footer />
    </main>
  )
}
