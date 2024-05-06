import { useState, useEffect, useRef } from 'react'
import './desktop.css'
import Image from 'next/image'

export default function Mobile(props) {
  const { datas, title } = props
  const [index, setIndex] = useState(0)
  const [image, setImage] = useState(datas[index].img)
  const frameRef = useRef(null)

  // récupère l'image sous forme d'objet avec tous ses attributs
  // recalcule si une des dépendances change (meilleurs perfs)
  useEffect(() => {
    setImage(datas[index].img)
  }, [datas, index, image, setImage])

  useEffect(() => {
    if (!frameRef.current) return
    frameRef.current.scrollTop = 0
  }, [index])

  function handleForward(e) {
    if (index + 2 > datas.length) {
      setIndex(0)
    } else {
      setIndex((i) => i + 1)
    }
  }
  function handleBack(e) {
    if (index === 0) {
      setIndex(datas.length - 1)
    } else {
      setIndex((i) => i - 1)
    }
  }
  const [height, setHeight] = useState(0)
  return (
    <>
      {!datas[0] ? (
        ''
      ) : (
        <div className="desktop">
          <div className="desktop-frame">
            <div className="desktop-screen" ref={frameRef}>
              {/* image ? image.default.height : */}
              <Image
                onLoad={(e) => setHeight((e.target.naturalHeight * 680) / 700)}
                className="work-desktop"
                src={image.replace('-scaled', '')}
                alt={`${title} desktop ${index} screenshot`}
                width={680}
                height={height}
              />
            </div>
            <div className="desktop-keyboard"></div>
          </div>
          {datas.length <= 1 ? (
            <div className="desktop-nav"></div>
          ) : (
            <div className="desktop-nav">
              <button className="nav-back" onClick={handleBack}>
                {' < '}
              </button>
              <div className="screenshot-title">{datas[index].title}</div>
              <button className="nav-forward" onClick={handleForward}>
                {' > '}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
