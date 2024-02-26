import React from 'react'
import gitwhite from '../../assets/social-icons/git-white.webp'
import gitblack from '../../assets/social-icons/git-black.webp'
import inwhite from '../../assets/social-icons/linkedin-white.webp'
import inblack from '../../assets/social-icons/linkedin-black.webp'
//import ayawhite from '../../assets/social-icons/aya-white.webp'
//import ayablack from '../../assets/social-icons/aya-black.webp'
import indeedwhite from '../../assets/social-icons/indeed-white.webp'
import indeedblack from '../../assets/social-icons/indeed-black.webp'
import './about.css'
import moi from '../../assets/moi.webp'
import Image from 'next/image'

export default function About() {
  const gitImage = {
    default: gitwhite,
    hover: gitblack,
  }

  const linkedinImage = {
    default: inwhite,
    hover: inblack,
  }
  const indeedImage = {
    default: indeedwhite,
    hover: indeedblack,
  }

  /*const ayaImage = {
    default: ayawhite,
    hover: ayablack,
  }*/
  return (
    <>
      <section id="about" className="about">
        <div className="about-left reveal-up">
          <h2 className="reveal-1">
            Vous cherchez un dévellopeur pour votre site ? Vous êtes au bon
            endroit !
          </h2>
          <p className="reveal-2">
            Présent sur la toile depuis plus de 12 ans, je vous apporte mon
            expertise dans le domaine quelque soit votre projet.
          </p>
          <p className="reveal-2">
            Couteau Suisse en ligne, je maîtrise autant les nouvelles
            technologies que les anciennes.
          </p>
          <p className="reveal-2"></p>
        </div>
        <div className="about-right reveal-left">
          <Image
            className="reveal-6"
            src={moi}
            width="331px"
            height="375px"
            alt="Pascal Krieg posing"
          />
        </div>
      </section>
    </>
  )
}
