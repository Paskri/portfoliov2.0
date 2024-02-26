'use client'
import './mousetracker.css'
import { useState, useEffect, useCallback, useRef } from 'react'

export default function MouseTracker() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [midX, setMidX] = useState(0)
  const [midY, setMidY] = useState(0)

  const containerRef = useRef(null)
  const innerRef = useRef(null)

  const updateRate = 10
  let counter = 0

  const setOrigin = useCallback((e) => {
    setMidX(e.offsetLeft + Math.floor(e.offsetWidth / 2))
    setMidY(e.offsetTop + Math.floor(e.offsetHeight / 2))
  }, [])

  const updatePosition = useCallback(
    (event) => {
      const e = event
      setMouseX(e.clientX - midX)
      setMouseY((e.clientY - midY) * -1)
    },
    [midX, midY]
  )

  const updateTransformStyle = useCallback((x, y) => {
    const style = `rotateX(${x}deg) rotateY(${y}deg)`
    innerRef.current.style.transform = style
    innerRef.current.style.webkitTransform = style
    innerRef.current.style.mozTransform = style
    innerRef.current.style.msTransform = style
    innerRef.current.style.oTransform = style
  }, [])

  const update = useCallback(
    (event) => {
      updatePosition(event)
      updateTransformStyle(
        (mouseY / innerRef.current.offsetHeight / 1.5).toFixed(2),
        (mouseX / innerRef.current.offsetWidth / 1.5).toFixed(2)
      )
    },
    [updatePosition, updateTransformStyle, mouseX, mouseY, innerRef]
  )
  const isTimeToUpdate = useCallback(() => {
    return counter++ % updateRate === 0
  }, [counter])

  const onMouseEnterHandler = useCallback(
    (event) => {
      update(event)
    },
    [update]
  )

  const onMouseLeaveHandler = useCallback(() => {
    innerRef.current.style = ''
  }, [innerRef])

  const onMouseMoveHandler = useCallback(
    (event) => {
      if (isTimeToUpdate()) {
        update(event)
      }
    },
    [isTimeToUpdate, update]
  )

  useEffect(() => {
    const container = containerRef.current
    const inner = innerRef.current

    setOrigin(container)

    container.addEventListener('mouseenter', onMouseEnterHandler)
    container.addEventListener('mouseleave', onMouseLeaveHandler)
    container.addEventListener('mousemove', onMouseMoveHandler)

    return () => {
      container.removeEventListener('mouseenter', onMouseEnterHandler)
      container.removeEventListener('mouseleave', onMouseLeaveHandler)
      container.removeEventListener('mousemove', onMouseMoveHandler)
    }
  }, [onMouseEnterHandler, onMouseLeaveHandler, onMouseMoveHandler, setOrigin])

  return (
    <section className="mouse-tracker">
      <div id="container" ref={containerRef}>
        <div id="inner" ref={innerRef}></div>
      </div>
    </section>
  )
}
