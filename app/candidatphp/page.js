import './candidatphp.css'
import '../../src/components/Typewriter/typewriter.css'
import Image from 'next/image'

import Header from '../../src/layout/Header'
import Why from '../../src/components/alternance/Why'
import Contact from '../../src/components/Contact'

import cv from '../../public/cv-php.webp'
import pk from '../../public/pk.webp'
import Works from '../../src/components/Works'
import Footer from '../../src/layout/Footer'
import BannerTest from '../../src/components/BannerTest'

export default function page() {
  const navLinks = [
    { href: 'about', txt: 'Qui suis-je ?' },
    {
      href: 'alternance',
      txt: 'Alternance ?',
    },
    { href: 'cv', txt: 'Mon CV' },
    { href: 'skills', txt: 'Compétences' },
    { href: 'works', txt: 'Réalisations' },
    { href: 'contact', txt: 'Contact' },
  ]

  return (
    <>
      <Header navLinks={navLinks} />
      <main>
        <BannerTest title1="PASCAL KRIEG, DÉVELOPPEUR WEB" title2="PHP-Symfony-Wordpress" subtitle1="Spécialités JS-MERN, Next.js" subtitle2="PHP-Symphony-Wordpress" />
        <section id="about" className="about-container reveal-up">
          <h2 className='reveal-4'>Bonjour et Bienvenue,</h2>
          <p className='reveal-4'>
            Je vous propose mes services en tant que développeur web php-Symfony-Wordpress.
          </p>
          <p className='reveal-5'>
            Polyvalent, passionné et agile, je m&apos;adapte à toutes les situations.
            Autodidacte dans beaucoup de domaines, j&apos;ai toujours eu une attitude axée
            sur l&apos;apprentissage comme en témoigne mon CV ci-dessous.
          </p>
          <p className='reveal-5'>
            Je dispose d&apos;une expérience de 10 ans dans le développement et la maintenance de mon site de vente en ligne.

          </p>
          <p className='reveal-6'>
            Maintenant, mon objectif est de mettre en pratique mes compétences en entreprise
            tout en continuant à progresser.
          </p>
          <p className='reveal-6'>
            Et si nous faisions équipe pour réaliser vos projets ?
          </p>

        </section>
        <section id="alternance">
          <h2>Mon CV</h2>
          <Image
            src={cv.src}
            width={cv.width}
            height={cv.height}
            alt="cv-junior"
          />
          <div className="mgn-top reveal-4">
            <a href="/cv-php.pdf" className="why-btn">
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
