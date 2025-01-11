import React from 'react'
import './mentionslegales.css'
import BannerTest from '../../src/components/BannerTest'
import Header from '../../src/layout/Header'
import Footer from '../../src/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import navLinks from '../../src/assets/json/navLinks.json'
//const navLinks = [
//  { href: 'about', txt: 'Qui suis-je ?' },
//  { href: 'booster', txt: 'Pour quoi ?' },
//  { href: 'services', txt: 'Services' },
//  { href: 'skills', txt: 'Compétences' },
//  { href: 'works', txt: 'Réalisations' },
//  { href: 'contact', txt: 'Contact' },
//]

export default function mentionslegales() {
  return (
    <>
      <Header navLinks={navLinks} />
      <main>
        <section className="mentions">
          <h2>Mentions Légales</h2>

          <h3>Éditeur du site</h3>
          <Image
            src="coords.webp"
            alt="pk - coordonnées"
            width={220}
            height={195}
          />
          {/*<p>Pascal Krieg</p>
          <p>26 rue du César Julien</p>
          <p>67200 Strasbourg</p>
          <p>Siret : 483 172 128 00058</p>
          <p>contact@krieg.fr</p>
          <p>06.99.20.25.49</p>*/}

          <h3>Hébergement</h3>
          <p>OVH SAS au capital de 10 000 000 €</p>
          <p>RCS Roubaix – Tourcoing 424 761 419 00045</p>
          <p>Code APE 6202A - N° TVA : FR 22 424 761 419</p>
          <p>Adresse : 2 rue Kellermann - 59100 Roubaix - France.</p>

          <h3>Propriété intellectuelle</h3>
          <p>
            Le contenu du site krieg.fr est protégé par le droit d’auteur. Toute
            reproduction ou utilisation est interdite sans autorisation.
          </p>
          <h3>Données personnelles</h3>
          <p>
            Les données collectées via le formulaire de contact sont utilisées
            uniquement pour répondre à votre demande, ne font l’objet d’aucun
            enregistrement et ne seront en aucun cas communiquées à un tiers.
            Vous disposez d’un droit d’accès, de rectification et de suppression
            en nous contactant à
            <Image
              className="mail-img"
              src="mail-img.webp"
              alt="pk - mail"
              width={130}
              height={20}
            />{' '}
            ou par le biais de notre{' '}
            <Link href="/#contact">formulaire de contact</Link>.
          </p>
        </section>
      </main>

      <Footer navLinks={navLinks} />
    </>
  )
}
