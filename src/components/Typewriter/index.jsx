'use client'
import React, { useState, useEffect } from 'react'
import './typewriter.css'

export default function Typewriter(props) {
  const { fullText, isTitle } = props
  const [text, setText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)
  const [index, setIndex] = useState(0)
  const [isDone, setIsDone] = useState(false)

  //toggle blinking cursor
  function toggleCursor() {
    setCursorVisible((c) => !c)
  }
  useEffect(() => {
    const blink = setInterval(toggleCursor, 500)
    return () => {
      clearTimeout(blink)
    }
  }, [])

  // animate typing
  useEffect(() => {
    const newDelay = Math.random() * 100

    const interval = setInterval(() => {
      if (index === fullText.length) {
        setIsDone(true)
      }
      if (!isDone) {
        setText(fullText.substring(0, index + 1))
        setIndex((i) => i + 1)
      }
    }, newDelay)
    return () => {
      clearTimeout(interval)
    }
  }, [index, fullText, isDone])
  const typewriterContent = text
    .split('*')
    .map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)
  return (
    <>
      <div className="typewriter">
        {isTitle ? <h1>{typewriterContent}</h1> : typewriterContent}
        {cursorVisible ? <span className="typewriter-cursor">_</span> : ''}
      </div>
    </>
  )
}
