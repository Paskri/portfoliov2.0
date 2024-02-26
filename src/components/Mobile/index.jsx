import { useState, useRef, useEffect } from 'react'
import './mobile.css'
import Image from 'next/image'

export default function Mobile(props) {
  const { datas, title } = props
  const [index, setIndex] = useState(0)
  const [image, setImage] = useState(
    require(`../../../public/img/${datas[index].img}.webp`)
  )
  const frameRef = useRef(null)

  useEffect(() => {
    setImage(require(`../../../public/img/${datas[index].img}.webp`))
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

  return (
    <>
      {!datas[0] ? (
        ''
      ) : (
        <div className="mobile">
          <div className="mobile-frame">
            <div className="mobile-screen" ref={frameRef}>
              <Image
                width={260}
                height={image ? image.default.height : 0}
                className="work-mobile"
                src={image.default.src}
                alt={`${title} mobile ${index} screenshot`}
              />
            </div>
          </div>
          {datas.length <= 1 ? (
            <div className="mobile-nav"></div>
          ) : (
            <div className="mobile-nav">
              <div className="nav-back" onClick={handleBack}>
                {' '}
                &lt;{' '}
              </div>
              <div className="screenshot-title">
                <p>{datas[index].title}</p>
              </div>
              <div className="nav-forward" onClick={handleForward}>
                {' '}
                &gt;{' '}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
