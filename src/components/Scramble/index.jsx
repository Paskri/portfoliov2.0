'use client'
import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import './scramble.css'

const Scramble = ({ text }) => {
  const [scrambledText, setScrambledText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [ref, inView] = useInView({ threshold: 1 })

  useEffect(() => {
    const characters =
      'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'
    let timerId = null

    const scramble = () => {
      const newText = [...text]

      for (let i = 0; i < text.length; i++) {
        if (i >= currentIndex) {
          // Utilisez >= au lieu de <
          newText[i] = characters.charAt(
            Math.floor(Math.random() * characters.length)
          )
        }
      }
      setScrambledText(newText.join(''))
      if (currentIndex < text.length) {
        timerId = setTimeout(scramble, 10)
      }
    }
    scramble()
    return () => {
      clearTimeout(timerId)
    }
  }, [text, currentIndex, isScrolling])

  //index control
  useEffect(() => {
    let indexTimer = 0
    if (isScrolling) {
      const timeValue = 50 //Math.round(Math.random() * 100) + 50
      indexTimer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
      }, timeValue)
    }
    return () => {
      clearTimeout(indexTimer)
    }
  }, [currentIndex, isScrolling])

  //scrolling control
  useEffect(() => {
    let viewTimer = 0
    if (inView) {
      viewTimer = setTimeout(() => {
        setIsScrolling(true)
      }, 300)
    } else {
      // restart scrambled when hidden
      //setCurrentIndex(0)
      setIsScrolling(false)
    }
    return () => {
      clearTimeout(viewTimer)
    }
  }, [text, inView, isScrolling])

  return (
    <span ref={ref} className="scrambled">
      {scrambledText}
    </span>
  )
}

export default Scramble
