'use client'
import { useEffect, useState } from 'react'
import './header.css'
import logo from '../../assets/logo-pk.webp'
import Image from 'next/image'

export default function Headerpage() {
  const [activeLink, setActiveLink] = useState('')
  const [position, setPosition] = useState(0)

  //processing nav a effects
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')

        if (entry.isIntersecting) {
          setActiveLink(id)
        } else if (activeLink === id) {
          setActiveLink('')
        }
      })
    }
    const observerOptions = {
      rootMargin: '-50% 0% -50% 0%',
    }
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    )
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [activeLink, position, setPosition])

  //processing animation effects
  useEffect(() => {
    const ratio = 0.1
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: ratio,
    }

    const handleIntersect = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.remove(
            'reveal-up',
            'reveal-left',
            'reveal-right'
          )
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, options)
    document
      .querySelectorAll('.reveal-up, .reveal-left, .reveal-right')
      .forEach(function (node) {
        node.classList.add('reveal-loaded')
        observer.observe(node)
      })

    // Clean up the observer
    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <header>
      <a className="logo reveal-right" href="/">
        <Image
          className="reveal-1"
          src={logo}
          width={275}
          height={327}
          alt="logo Pascal Krieg"
        />
      </a>
      <nav className="reveal-left">
        <ul className="reveal-2">
          <li>
            <a
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
              href="/#about"
            >
              Qui suis-je ?
            </a>
          </li>
          <li>
            <a
              className={`nav-link ${activeLink === 'booster' ? 'active' : ''}`}
              href="/#booster"
            >
              Pour quoi ?
            </a>
          </li>
          <li>
            <a
              className={`nav-link ${
                activeLink === 'services' ? 'active' : ''
              }`}
              href="/#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}
              href="/#skills"
            >
              Compétences
            </a>
          </li>

          <li>
            <a
              className={`nav-link ${activeLink === 'works' ? 'active' : ''}`}
              href="/#works"
            >
              Réalisations
            </a>
          </li>
          <li>
            <a
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
              href="/#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
