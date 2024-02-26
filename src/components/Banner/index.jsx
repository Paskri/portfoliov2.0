'use client'
import pkImg from '../../assets/pkimg.webp'
import Image from 'next/image'
import './banner.css'
import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'

export default function Banner(props) {
  const { title1, title2, subtitle1, subtitle2 } = props

  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [midX, setMidX] = useState(0)
  const [midY, setMidY] = useState(0)
  const [mouseInside, setMouseInside] = useState(false)

  const bannerContainerRef = useRef(null)
  const bannerInner = useRef(null)

  const setOrigin = useCallback((banner) => {
    setMidX(Math.round(banner.width / 2))
    setMidY(Math.round(banner.height / 2))
  }, [])
  const updateRate = 10
  let counter = 0
  const isTimeToUpdate = useCallback(() => {
    return counter++ % updateRate === 0
  }, [counter])

  const update = useCallback(
    (e) => {
      const bannerContainer = bannerContainerRef.current
      const banner = bannerContainer.getBoundingClientRect()
      const xInRect = Math.round(e.clientX - banner.left)
      const yInRect = Math.round(e.clientY - banner.top)
      const relativeX = xInRect - midX
      const relativeY = yInRect - midY

      // position relative dans le cadre mais pas encore exprimé en fonction du center
      setMouseX(mouseX + (relativeX - mouseX)) //
      setMouseY(mouseY + (relativeY - mouseY)) //

      //créer un point souris qui se déplace de manière constante (Vitesse régulière)
      //et non déterminée par les mouvement brusques
      let fluidX
      let fluidY

      let decX = (mouseX / midX) * 10
      let decY = (mouseY / midY) * 10 * -1

      bannerInner.current.style.transform = `perspective(600px) rotateX(${decY}deg) rotateY(${decX}deg)`
    },
    [midX, midY, mouseX, mouseY, bannerContainerRef, bannerInner]
  )

  const handleMouseEnter = useCallback(
    (e) => {
      setMouseInside(true)
      update(e)
    },
    [setMouseInside, update]
  )

  const handleMouseMove = useCallback(
    (e) => {
      if (isTimeToUpdate) {
        const banner = bannerContainerRef.current.getBoundingClientRect()
        setOrigin(banner)
        update(e)
      }
    },
    [bannerContainerRef, isTimeToUpdate, setOrigin, update]
  )

  const handleMouseLeave = useCallback(() => {
    const bannerContainer = bannerContainerRef.current
    setMouseInside(false)
    bannerInner.current.style.transition = '0.8s'
    bannerInner.current.style.transform = ''
    setTimeout(() => {
      bannerInner.current.style.transition = ''
    }, 800)
  }, [setMouseInside, bannerContainerRef, bannerInner])

  useEffect(() => {
    const bannerContainer = bannerContainerRef.current

    bannerContainer.addEventListener('mouseenter', handleMouseEnter)
    bannerContainer.addEventListener('mousemove', handleMouseMove)
    bannerContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      bannerContainer.removeEventListener('mouseenter', handleMouseEnter)
      bannerContainer.removeEventListener('mousemove', handleMouseMove)
      bannerContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [bannerContainerRef, handleMouseLeave, handleMouseMove, handleMouseEnter])

  return (
    <>
      <section className="banner-container" ref={bannerContainerRef}>
        <div className="banner-inner" ref={bannerInner}>
          <div className="reveal-up">
            <h1 className="reveal-2">
              <span>{title1}</span>&nbsp;
              <span>{title2}</span>
            </h1>
          </div>
          <div className="reveal-up">
            <Image
              className="pk-img reveal-3"
              src={pkImg}
              alt={`Pascal Krieg illustrated`}
              width={600}
              height={468}
              priority={true}
            />
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
