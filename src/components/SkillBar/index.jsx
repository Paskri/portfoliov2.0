'use client'
import { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import './skillbar.css'
import Image from 'next/image'

export default function Skillbar(props) {
  const { name, img } = props
  const [ref] = useInView({ threshold: 0.5 })
  //const svg = useMemo(() => require(`../../assets/img/logos/${img}`), [img])

  return (
    <div className="skill-container" ref={ref}>
      <div className="skill-logo">
        <Image src={img} alt={`${name} logo`} width={75} height={75} />
      </div>
      <div className="skill-name">{name}</div>
    </div>
  )
}
