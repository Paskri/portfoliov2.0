import './candidatjs.css'
import '../../src/components/Typewriter/typewriter.css'
import Image from 'next/image'

import Header from '../../src/layout/Header'
import Why from '../../src/components/alternance/Why'
import Contact from '../../src/components/Contact'

import cv from '../../public/cv-js.webp'
import pk from '../../public/pk.webp'
import Works from '../../src/components/Works'
import Footer from '../../src/layout/Footer'
import Banner from '../../src/components/Banner'
import BannerTest from '../../src/components/BannerTest'

export default function page() {
  const navLinks = [
    { href: 'about', txt: 'Qui suis-je ?' },
    { href: 'cv', txt: 'Mon CV' },
    { href: 'skills', txt: 'Compétences' },
    { href: 'works', txt: 'Réalisations' },
    { href: 'contact', txt: 'Contact' },
  ]

  return (
    <>
      <Header navLinks={navLinks} />
      <main>
        <BannerTest title1="PASCAL KRIEG, DÉVELOPPEUR WEB"
          title2="JS"
          subtitle1="Spécialité JS-MERN, Next.js"
          subtitle2="PHP-Symphony-Wordpress" />
        <section id="about" className="about-container reveal-up">
          <h2 className='reveal-4'>Bonjour et Bienvenue,</h2>
          <p className='reveal-4'>
            Je vous propose mes services en tant que développeur web full javascript.
          </p>
          <p className='reveal-5'>
            Polyvalent, passionné et agile, je m&apos;adapte à toutes les situations.
            Autodidacte dans beaucoup de domaines, j&apos;ai toujours eu une attitude axée
            sur l&apos;apprentissage comme en témoigne mon CV ci-dessous.
          </p>
          <p className='reveal-5'>
            Aujourd&apos;hui, je suis déterminé à acquérir une certification
            de niveau 7 (équivalent bac+5).
            Pour cela, en toute logique, je procède étape par étape et j&apos;ai
            commencé par valider une certification de niveau 5 (bac+2) entre
            janvier et juin 2023 sur la base d&apos;un financement personnel.
          </p>
          <p className='reveal-6'>
            Maintenant, mon objectif est de mettre en pratique mes compétences en entreprise
            tout en continuant à progresser.
          </p>
          <p className='reveal-6'>
            Et si nous faisions équipe pour réaliser vos projets ?
          </p>

        </section>
        <section id="cv">
          <h2>Mon CV</h2>
          <Image
            src={cv.src}
            width={cv.width}
            height={cv.height}
            alt="cv-junior"
          />
          <div className="mgn-top reveal-4">
            <a href="/cv-js.pdf" className="why-btn">
              Voir/télécharger mon CV au format pdf
            </a>
          </div>
        </section>
        <Works />
        <Contact />
        <Footer navLinks={navLinks} />
      </main>
    </>
  )
}
