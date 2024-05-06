'use client'
import { useCallback, useEffect, useState } from 'react'
import './header.css'
import logo from '../../assets/logo-pk.webp'
import Image from 'next/image'
import ReactModal from 'react-modal'

ReactModal.setAppElement('body')
const customStyle = {
  overlay: {
    width: '100vw',
    maxWidth: '1440px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    overflow: 'auto',
    padding: '0',
    zIndex: 200,
    margin: '0 auto',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    border: 'none',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
}
export default function Header(props) {
  const { navLinks } = props
  const [activeLink, setActiveLink] = useState('')
  const [position, setPosition] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

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

    //observer
    const ratio = 0.1
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: ratio,
    }
    const observer = new IntersectionObserver(handleIntersect, options)
    const revealables = document.querySelectorAll(
      '.reveal-up, .reveal-left, .reveal-right'
    )
    revealables.forEach(function (node) {
      node.classList.add('reveal-loaded')
      observer.observe(node)
    })

    // Clean up the observer
    return () => {
      observer.disconnect()
    }
  }, [])

  // processing nav click
  const handleNavLinkClick = (event, targetId, modalMode) => {
    event.preventDefault()
    if (modalMode) {
      toggleModal(event)
      const navBtn = document.querySelector('.ham')
      navBtn.classList.toggle('active')
    }
    const targetElement = document.getElementById(targetId)
    let headerHeight = 0
    if (window.innerWidth <= 435) {
      headerHeight = 100
    } else if (window.innerWidth <= 850) {
      headerHeight = 65
    } else {
      headerHeight = 80
    }
    const offset = targetElement.offsetTop - headerHeight

    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    })
  }

  const toggleModal = useCallback(
    (e) => {
      e.stopPropagation()
      setIsOpen(!isOpen)
      if (isOpen) {
        document.body.style.overflow = 'auto'
      } else {
        document.body.style.overflow = 'hidden'
      }
    },
    [isOpen]
  )

  //handling modal close on window resize
  const [screenWidth, setScreenWidth] = useState(0)
  useEffect(() => {
    let timeoutId = null

    function handleResize(e) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setScreenWidth(window.innerWidth)
        if (screenWidth >= 880 && isOpen) {
          const navBtn = document.querySelector('.ham')
          navBtn.classList.remove('active')
          toggleModal(e)
        }
      }, 100)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen, screenWidth, toggleModal])
  //function handleModalNavClick(event, link) {
  //  handleNavLinkClick(event, link)
  //  toggleModal(event)
  //  const navBtn = document.querySelector('.ham')
  //  navBtn.classList.toggle('active')
  //}
  return (
    <header>
      <a className="logo reveal-right" href="/">
        <Image
          className="reveal-1"
          src={logo}
          width={275}
          height={327}
          alt="logo Pascal Krieg"
          priority={true}
        />
      </a>
      <div className="mobile-header-nav-btn reveal-left">
        <svg
          className="ham hamRotate ham8 reveal-2"
          viewBox="0 0 100 100"
          width={80}
          onClick={(e) => {
            const navBtn = document.querySelector('.ham')
            navBtn.classList.toggle('active')
            toggleModal(e)
            // ouvrir modale
          }}
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          />
        </svg>
      </div>
      <nav className="reveal-left desktop-header-nav">
        <ul className="reveal-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className={`nav-link ${
                  activeLink === link.href ? 'active' : ''
                }`}
                href={`#${link.href}`}
                onClick={(event) => handleNavLinkClick(event, link.href, false)}
              >
                {link.txt}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ReactModal
        className="nav-modal"
        closeTimeoutMS={500}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        style={customStyle}
        contentLabel={''}
      >
        <nav className="mobile-header-nav">
          <ul className="reveal-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={`nav-link ${
                    activeLink === `${link.href}` ? 'active' : ''
                  }`}
                  href={`#${link.href}`}
                  onClick={(event) =>
                    handleNavLinkClick(event, link.href, true)
                  }
                >
                  {link.txt}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </ReactModal>
    </header>
  )
}
