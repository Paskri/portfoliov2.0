'use client'
import React, { useState, useEffect, useRef } from 'react'
import ReactModal from 'react-modal'
ReactModal.setAppElement('body')

//import RainFx from '../RainFx'
//import Typewriter from '../Typewriter'
import Mobile from '../Mobile'
import Desktop from '../Desktop'
import Tags from '../Tags'
import SocialLink from '../SocialLink'

import './work.css'
import gitwhite from '../../assets/social-icons/git-white.webp'
import gitblack from '../../assets/social-icons/git-black.webp'
import rain from '../../assets/rain.webp'
import Image from 'next/image'

//react-modal custom style
const customStyle = {
  overlay: {
    width: '100vw',
    maxWidth: '1440px',
    height: '100vh',
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

//ReactModal.setAppElement('#__next') provisoirement désactivé

export default function Work(props) {
  const { work, index, loading } = props
  const [isOpen, setIsOpen] = useState(false)
  const gitImage = {
    default: gitwhite,
    hover: gitblack,
  }
  const [animate, setAnimate] = useState('')
  const [reveal, setReveal] = useState('')
  const divAnimate = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [desktop, setDesktop] = useState([])
  const [mobile, setMobile] = useState([])

  //toggle background filter
  function handleMouseEnter(event) {
    const twContainer = event.currentTarget
    twContainer.classList.add('show-tw')
    const rainContainer = twContainer.previousElementSibling
    rainContainer.classList.add('show-rain')
  }

  function handleMouseLeave(event) {
    const twContainer = event.currentTarget
    twContainer.classList.remove('show-tw')
    const rainContainer = twContainer.previousElementSibling
    rainContainer.classList.remove('show-rain')
  }

  //toggle header visibility
  useEffect(() => {
    if (isOpen) {
      document.querySelector('header').classList.add('hidden')
    } else {
      document.querySelector('header').classList.remove('hidden')
    }
  }, [isOpen])

  //manage mobile display
  let middleClass = ''

  if (!mobile[0]) {
    middleClass = ' center'
  }

  function toggleModal(e) {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }
  // manage animations
  useEffect(() => {
    if (index === 0 || index === 3 || index === 6) {
      setAnimate('reveal-right')
      setReveal('reveal-1')
    } else if (index === 1 || index === 4 || index === 7) {
      setAnimate('reveal-up')
      setReveal('reveal-2')
    } else if (index === 2 || index === 5 || index === 8) {
      setAnimate('reveal-left')
      setReveal('reveal-3')
    }
    setLoaded(true)
  }, [animate, reveal, setAnimate, setReveal, index])

  useEffect(() => {
    if (loaded) {
      const ratio = 0.1
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio,
      }
      const handleIntersect = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            divAnimate.current.classList.add('reveal-loaded')
            divAnimate.current.classList.remove(
              'reveal-up',
              'reveal-left',
              'reveal-right'
            )
            observer.unobserve(entry.target)
          }
        })
      }

      const observer = new IntersectionObserver(handleIntersect, options)
      observer.observe(divAnimate.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [divAnimate, loaded])
  //generating project datas
  useEffect(() => {
    if (work) {
      const desktopDatas = Object.entries(work.acf_data)
        .filter(
          ([key, value]) => key.startsWith('desk_img_title') && value !== ''
        )
        .map(([key, title]) => {
          const id = key.split('_').pop()
          return {
            title: title,
            img: work.acf_data[`desk_img_${id}`],
          }
        })
      setDesktop(desktopDatas)

      const mobileDatas = Object.entries(work.acf_data)
        .filter(
          ([key, value]) => key.startsWith('mob_img_title') && value !== ''
        )
        .map(([key, title]) => {
          const id = key.split('_').pop()
          return {
            title: title,
            img: work.acf_data[`mob_img_${id}`],
          }
        })
      setMobile(mobileDatas)
    }
  }, [work])
  //console.log('Work in Work : ', work)
  return (
    <>
      {loading ? (
        ''
      ) : (
        <div className={animate} ref={divAnimate}>
          <div className={`work-container ${reveal}`}>
            <div className="work-background">
              <Image
                className="wb-img"
                width={420}
                height={278}
                src={work.acf_data.background}
                alt={`${work.acf_data.title} background`}
              />
            </div>
            <div className="logo-container">
              <Image
                className="work-logo"
                src={work.acf_data.logo}
                alt={`${work.acf_data.title} logo`}
                width={420}
                height={278}
              />
              <div className="tags">{work.acf_data.tags}</div>
            </div>
            <div className="rain-container">
              <Image src={rain} alt="rain" width="420" height="278" />
            </div>
            <div
              onClick={toggleModal}
              className="typewriter-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p className="typewriter">En savoir plus ...</p>
            </div>
            <ReactModal
              className="work-modal"
              isOpen={isOpen}
              onRequestClose={toggleModal}
              style={customStyle}
              contentLabel={`${work.acf_data.title} modal`}
            >
              <div className="modal-top">
                <Image
                  onClick={toggleModal}
                  className="close"
                  src={require(`../../assets/close.svg`).default}
                  alt="close cross"
                />
              </div>
              <div className="modal-middle">
                <div className="modal-logo-title">
                  <Image
                    className="work-logo"
                    src={work.acf_data.logo_modal}
                    alt={`${work.acf_data.title}-logo`}
                    width={work.acf_data.logo_width}
                    height={60}
                  />
                </div>
                <div className="modal-middle-container">
                  <div className="modal-middle-left">
                    <h3>La mission :</h3>
                    {work.acf_data.description}
                    <h3>Compétences mises en œuvre :</h3>
                    <ul>
                      {work && work.acf_data && work.acf_data.skills
                        ? JSON.parse(work.acf_data.skills).map(
                            (skill, index) => (
                              <li key={`skill-${index}`}>{skill}</li>
                            )
                          )
                        : ''}
                    </ul>
                    <h3>Commentaires : </h3>
                    {work.acf_data.comments
                      ? JSON.parse(work.acf_data.comments).map(
                          (comment, index) => (
                            <p key={`comment-${index}`}>{comment}</p>
                          )
                        )
                      : ''}
                    <Tags tags={work.acf_data.keywords} />
                  </div>

                  <div className="modal-middle-right">
                    {work.acf_data.code ? (
                      <div className="git-container">
                        <p>Consulter le code :</p>
                        <SocialLink
                          link={work.acf_data.code}
                          image={gitImage}
                        />
                      </div>
                    ) : (
                      ''
                    )}

                    {work.acf_data.demo ? (
                      <div className="demo-container">
                        <p>Démo du site :</p>
                        <a
                          className="demo-link"
                          href={work.acf_data.demo}
                          target="about:blank"
                        >
                          Demo
                        </a>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
              <div className={`modal-bottom${middleClass}`}>
                {!mobile[0] ? (
                  ''
                ) : (
                  <Mobile datas={mobile} title={work.acf_data.title} />
                )}
                <Desktop datas={desktop} title={work.acf_data.title} />
              </div>
            </ReactModal>
          </div>
        </div>
      )}
    </>
  )
}
