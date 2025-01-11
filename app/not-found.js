import Link from 'next/link'
import './error.css'
import Header from '../src/layout/Header'
import Footer from '../src/layout/Footer'
import navLinks from '../src/assets/json/navLinks.json'
import Image from 'next/image'
export default function Error() {

  return (
    <>
      <Header navLinks={navLinks} />
      <main>
        <section className="error">
          <div className="fof-img-container">
            <Image src="logo256.png" fill alt="logo pk" />
          </div>
          <p className="four-o-four gradient-text">Erreur 404</p>
          <p className="oups gradient-text">Oups ! La page que vous demandez n&apos;existe pas</p>
        </section>
      </main>
      <Footer navLinks={navLinks} />
    </>
  )
}
