import React, { useEffect, useRef } from 'react'
import './rainfx.css'

export default function RainFx() {
  const canvasRef = useRef(null)
  const canvas2Ref = useRef(null)
  let canvasWidth, canvasHeight, canvas2Width, canvas2Height
  let symbols = []
  let columns
  const fontSize = 16

  function handleResize() {
    canvasWidth = canvasRef.current.clientWidth
    canvasHeight = canvasRef.current.clientHeight
    canvas2Width = canvas2Ref.current.clientWidth
    canvas2Height = canvas2Ref.current.clientHeight
    canvasRef.current.width = canvasWidth
    canvasRef.current.height = canvasHeight
    canvas2Ref.current.width = canvas2Width
    canvas2Ref.current.height = canvas2Height
    columns = Math.round(canvasRef.current.width / fontSize) + 1
    initialize()
  }

  function initialize() {
    //symbols = []
    for (let i = 0; i < columns; i++) {
      symbols[i] = {
        x: i,
        y: canvasHeight / Math.random(),
        fontSize: fontSize,
        text: 'A',
      }
    }
  }
  let lastTime = 0
  let timer = 0
  function draw(timeStamp) {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const canvas2 = canvas2Ref.current
    const ctx2 = canvas2.getContext('2d')
    const fps = 24
    const nextFrame = 1000 / fps
    const deltaTime = timeStamp - lastTime
    lastTime = timeStamp

    if (timer > nextFrame) {
      ctx.textAlign = 'end'
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, canvasWidth, canvasHeight)
      ctx.font = fontSize + 'px monospace'
      ctx.fillStyle = '#034BEE'

      ctx2.textAlign = 'end'
      ctx2.clearRect(0, 0, canvasWidth, canvasHeight)
      ctx2.font = fontSize + 'px monospace'
      ctx2.fillStyle = '#5E8FFD' //'#0098C7' //'#00C3FF'

      symbols.forEach((symbol) => {
        symbol.text = getRandomCharacter()
        ctx.fillText(
          symbol.text,
          symbol.x * symbol.fontSize,
          symbol.y * symbol.fontSize
        )
        ctx2.fillText(
          symbol.text,
          symbol.x * symbol.fontSize,
          symbol.y * symbol.fontSize
        )

        if (symbol.y * symbol.fontSize > canvasHeight && Math.random() > 0.97) {
          symbol.y = 0
        } else {
          symbol.y += 0.9
        }
      })

      timer = 0
    } else {
      timer += deltaTime
    }

    requestAnimationFrame(draw)
  }

  function getRandomCharacter() {
    const characters =
      'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return characters.charAt(Math.floor(Math.random() * characters.length))
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    draw(0)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div className="rain-container">
      <canvas className="canvas" ref={canvasRef}></canvas>
      <canvas className="canvas" ref={canvas2Ref}></canvas>
    </div>
  )
}
