import Header from '../src/layout/Header'
import Booster from '../src/components/Booster'
import Human from '../src/components/Human'
import Services from '../src/components/Services'
import Skills from '../src/components/Skills'
import Works from '../src/components/Works'
import Contact from '../src/components/Contact'
import Footer from '../src/layout/Footer'
import BannerTest from '../src/components/BannerTest'
import { serverFetch } from '../src/assets/functions/functions.jsx'

const navLinks = [
  { 'href': 'about', 'txt': 'Qui suis-je ?' },
  { 'href': 'booster', 'txt': 'Pour quoi ?' },
  { 'href': 'services', 'txt': 'Services' },
  { 'href': 'skills', 'txt': 'Compétences' },
  { 'href': 'works', 'txt': 'Réalisations' },
  { 'href': 'contact', 'txt': 'Contact' },
]

export default async function Home() {
  return (
    <>
      <Header navLinks={navLinks} />
      <main>
        <BannerTest title1="PASCAL KRIEG, DÉVELOPPEUR WEB"
          title2="AU K PAR K"
          subtitle1="Création, optimisation, refonte et maintenance de site internet."
          subtitle2="Pour TPE/PME, entrepreneurs, artisans, commerces locaux." />
        <Human />
        <Booster />
        <Services />
        <Skills />
        <Works />
        <Contact />
      </main>
      <Footer navLinks={navLinks} />
    </>
  )
}
