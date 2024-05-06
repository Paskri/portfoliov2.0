import { useState, useRef, useEffect } from 'react'
import './mobile.css'
import Image from 'next/image'

export default function Mobile(props) {
  const { datas, title } = props
  console.log(datas)
  const [index, setIndex] = useState(0)
  const [image, setImage] = useState(datas[index].img)
  const frameRef = useRef(null)

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
        <div className="mobile">
          <div className="mobile-frame">
            <div className="mobile-screen" ref={frameRef}>
              {/*image ? image.default.height :*/}
              <Image
                onLoad={(e) => {
                  //console.log('natural height : ', e.target)
                  setHeight(e.target.naturalHeight)
                }}
                width={260}
                height={height}
                className="work-mobile"
                src={image.replace('-scaled', '')}
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
