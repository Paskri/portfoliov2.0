'use client'
import pkImg from '../../assets/pkimg2.webp'
import element1 from '../../assets/lvl1.webp'
import element2 from '../../assets/lvl2.webp'
import element3 from '../../assets/lvl3.webp'
import simplePkImg from '../../assets/pkimg.webp'
import '../Banner/banner.css'
import './bt.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function BannerTest(props) {
  const { title1, title2, subtitle1, subtitle2 } = props

  const [letterX, setLetterX] = useState(0)
  const [letterY, setLetterY] = useState(0)

  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const [midX, setMidX] = useState(0)
  const [midY, setMidY] = useState(0)

  const [trigger, setTrigger] = useState(false)
  const [realTrigger, setRealTrigger] = useState(null)
  const [timerId, setTimerId] = useState(null)

  const [smallScreen, setSmallScreen] = useState(false)

  const animateFrame = useRef(false)
  const btContainerRef = useRef(null)
  const letterRef = useRef(null)
  const element1Ref = useRef(null)
  const element2Ref = useRef(null)
  const element3Ref = useRef(null)
  const bannerInner = useRef(null)

  //checking screen size
  const checkSmallScreen = (display) => {
    display.innerWidth < 650 ? setSmallScreen(true) : setSmallScreen(false)
  }
  useEffect(() => {
    checkSmallScreen(window)
  }, [smallScreen])

  //initializing
  const checkInitialMousePosition = (e) => {
    const btContainer = btContainerRef.current
    const rect = btContainer.getBoundingClientRect()
    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      setTrigger(true)
    }
  }

  useEffect(() => {
    window.addEventListener('load', checkInitialMousePosition)
    return () => {
      window.removeEventListener('load', checkInitialMousePosition)
    }
  }, [])

  const setOrigin = useCallback((banner) => {
    setMidX(Math.round(banner.width / 2))
    setMidY(Math.round(banner.height / 2))
    setLetterX(Math.round(banner.width / 2))
    setLetterY(Math.round(banner.height / 2))
  }, [])

  const handleResizing = useCallback(
    (e) => {
      checkSmallScreen(e.target)
      const btContainer = document.querySelector('.banner-container')
      const banner = btContainer.getBoundingClientRect()
      setOrigin(banner)
    },
    [setOrigin]
  )

  useEffect(() => {
    const btContainer = document.querySelector('.banner-container')
    const banner = btContainer.getBoundingClientRect()
    setOrigin(banner)
    window.addEventListener('resize', handleResizing)
    return () => {
      window.removeEventListener('resize', handleResizing)
    }
  }, [handleResizing, setOrigin])

  // set interval for update mouse position
  const updateRate = 10
  let counter = 0
  const isTimeToUpdate = useCallback(() => {
    return counter++ % updateRate === 0
  }, [counter])

  //animation while ...

  const updateMouse = useCallback(
    (e) => {
      const btContainer = btContainerRef.current
      const bt = btContainer.getBoundingClientRect()
      setMouseX(Math.round(e.clientX - bt.left - midX))
      setMouseY(Math.round(e.clientY - bt.top - midY))
    },
    [midX, midY]
  )

  const update = useCallback(() => {
    const speed = 10

    let signX = mouseX > letterX - midX ? 1 : -1
    let signY = mouseY > letterY - midY ? 1 : -1
    setLetterX(letterX + speed * signX)
    setLetterY(letterY + speed * signY)

    if (letterRef.current) {
      letterRef.current.style.left = `${letterX}px`
      letterRef.current.style.top = `${letterY}px`
    }
    let vX = (letterX - midX) / midX
    let vY = (letterY - midY) / midY

    let decX = vX * 10
    let decY = vY * 10 * -1
    //banner is fixed
    //level1 (Front)
    let translateX = vX * 50
    let translateY = vY * 50
    //level2 (back)
    let translateX2 = vX * 40
    let translateY2 = vY * 40
    //level 3 (Front2)
    let translateX3 = vX * 60
    let translateY3 = vY * 60

    bannerInner.current.style.transform = `perspective(600px) rotateX(${decY}deg) rotateY(${decX}deg)`
    element1Ref.current.style.transform = `perspective(600px) rotateX(${decY}deg) rotateY(${decX}deg) translateX(${translateX}px) translateY(${translateY}px)`
    element2Ref.current.style.transform = `perspective(600px) rotateX(${decY}deg) rotateY(${decX}deg) translateX(${translateX2}px) translateY(${translateY2}px)`
    element3Ref.current.style.transform = `perspective(600px) rotateX(${decY}deg) rotateY(${decX}deg) translateX(${translateX3}px) translateY(${translateY3}px)`
  }, [letterRef, letterX, letterY, mouseX, mouseY, midX, midY])

  const animate = useCallback(
    (e) => {
      update()
      animateFrame.current = requestAnimationFrame(animate)
    },
    [animateFrame, update]
  )

  const handleMouseEnter = useCallback(() => {
    //clearing timer for delayed actions
    if (timerId) {
      clearTimeout(timerId)
    }
    setTimerId(null)
    //triggering
    setRealTrigger(true)
    setTrigger(true)
  }, [timerId])

  const handleMouseMove = useCallback(
    (e) => {
      if (isTimeToUpdate) {
        updateMouse(e)
      }
    },
    [isTimeToUpdate, updateMouse]
  )

  const delayedActions = useCallback(() => {
    setTrigger(false)
    cancelAnimationFrame(animateFrame.current)
    setTimerId(null)
  }, [])

  const handleMouseLeave = useCallback(() => {
    //setLetterX(midX)
    //setLetterY(midY)
    setMouseX(0)
    setMouseY(0)
    setRealTrigger(false)
    const newTimeoutId = setTimeout(delayedActions, 2000)
    setTimerId(newTimeoutId)

    //letterRef.current.style.left = `${midX}px`
    //letterRef.current.style.top = `${midY}px`
  }, [delayedActions])

  useEffect(() => {
    if (!smallScreen) {
      const btContainer = document.querySelector('.banner-container')

      btContainer.addEventListener('mouseenter', handleMouseEnter)
      btContainer.addEventListener('mousemove', handleMouseMove)
      btContainer.addEventListener('mouseleave', handleMouseLeave)

      if (trigger) {
        animateFrame.current = requestAnimationFrame(animate)
      } else {
        cancelAnimationFrame(animateFrame.current)
      }

      return () => {
        btContainer.removeEventListener('mouseenter', handleMouseEnter)
        btContainer.removeEventListener('mousemove', handleMouseMove)
        btContainer.removeEventListener('mouseleave', handleMouseLeave)
        cancelAnimationFrame(animateFrame.current)
      }
    }
  }, [
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
    animate,
    animateFrame,
    trigger,
    smallScreen,
  ])

  return (
    <>
      <section className="banner-container" ref={btContainerRef}>
        <div className="letter" ref={letterRef}></div>
        <div className="banner-inner reveal-up" ref={bannerInner}>
          <div className="reveal-up">
            <h1 className="reveal-2">
              <span>{title1}</span>&nbsp;
              <span>{title2}</span>
            </h1>
          </div>
          <div className="images-container reveal-3">
            {smallScreen ? (
              <>
                <Image
                  className="pk-img reveal-3"
                  src={simplePkImg}
                  alt={`Pascal Krieg illustrated`}
                  width={600}
                  height={468}
                  priority={true}
                />
              </>
            ) : (
              <>
                <Image
                  className="pk-img reveal-3"
                  src={pkImg}
                  alt={`Pascal Krieg illustrated`}
                  width={600}
                  height={468}
                  priority={true}
                />
                <Image
                  className="reveal-3 element1"
                  ref={element1Ref}
                  src={element1}
                  alt={`Pascal Krieg illustrated`}
                  width={600}
                  height={480}
                  priority={true}
                />
                <Image
                  className="reveal-3 element2"
                  ref={element2Ref}
                  src={element2}
                  alt={`Pascal Krieg illustrated`}
                  width={600}
                  height={480}
                  priority={true}
                />
                <Image
                  className="reveal-3 element3"
                  ref={element3Ref}
                  src={element3}
                  alt={`Pascal Krieg illustrated`}
                  width={600}
                  height={480}
                  priority={true}
                />
              </>
            )}
          </div>
          <div className="reveal-up">
            <div className="banner-text reveal-4">
              <p>{subtitle1}</p>
              <p>{subtitle2}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
