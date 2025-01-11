'use client'
import './credits.css'
//import Headerpage from '../../src/layout/Headerpage'
import Footer from '../../src/layout/Footer'
import Header from '../../src/layout/Header'

const navLinks = [
  { href: 'about', txt: 'Qui suis-je ?' },
  { href: 'booster', txt: 'Pour quoi ?' },
  { href: 'services', txt: 'Services' },
  { href: 'skills', txt: 'Compétences' },
  { href: 'works', txt: 'Réalisations' },
  { href: 'contact', txt: 'Contact' },
]

export default function page() {
  return (
    <>
      <Header navLinks={navLinks} />
      <main style={{ height: '100vh' }}>
        <h1>Crédits</h1>
        <p>Logo et germes d&apos;idées : Nicolas Peyraud</p>
        <p>Illustrations : upklyak sur FreePik</p>
        <p>https://fr.freepik.com/auteur/upklyak</p>
        <p>Retouches : Léane Krieg</p>
        <div className="thanks">
          <p>
            Merci à tous pour votre soutien, vos idées, votre travail, vos
            conseils, votre temps et nos fous-rires.
          </p>
        </div>

        <a href="/">Retour à l&apos;accueil</a>
      </main>
      <Footer navLinks={navLinks} />
    </>
  )
}
