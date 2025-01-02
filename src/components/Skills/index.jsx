'use client'
import SkillBar from '../SkillBar'
//import Scramble from '../Scramble'
import Loader from '../Loader'
import './skills.css'
import useSWR from 'swr'
import { useEffect, useRef } from 'react'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Skills() {
  //const [blocs, setblocs] = useState({})
  const containerRef = useRef()
  const { data, error, isLoading } = useSWR(
    'https://api.krieg.fr/wp-json/wp/v2/skill',
    fetcher
  )
  let skills = data
  //if (data && data !== serverSkills) {
  //  skills = data
  //  console.log('SWR datas')
  //} else {
  //  skills = serverSkills
  //  console.log('Server datas', serverSkills)
  //}
  //processing animation effects
  useEffect(() => {
    const handleIntersect = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.remove(
            'reveal-up',
            'reveal-left',
            'reveal-right'
          )
          observer.unobserve(entry.target)
        }
      })
    }

    //observer
    const ratio = 0.1
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: ratio,
    }
    const observer = new IntersectionObserver(handleIntersect, options)

    const revealables = containerRef.current.querySelectorAll(
      '.reveal-up, .reveal-left, .reveal-right'
    )
    revealables.forEach(function (node) {
      node.classList.add('reveal-loaded')
      observer.observe(node)
    })

    // Clean up the observer
    return () => {
      observer.disconnect()
    }
  }, [data])

  let blocs = {}
  if (skills && skills[0] && skills[0].acf_data) {
    let newSkills = Object.entries(skills[0].acf_data)
      .filter(([key, value]) => key.startsWith('title_') && value !== '')
      .map(([key, title]) => {
        const id = key.split('_').pop()
        return {
          title: title,
          img: skills[0].acf_data[`img_${id}`],
          family: skills[0].acf_data[`family_${id}`],
        }
      })
    const languages = newSkills.filter((skill) => skill.family === 'langage')
    const frameworks = newSkills.filter((skill) => skill.family === 'framework')
    const bdds = newSkills.filter((skill) => skill.family === 'bd')
    const tools = newSkills.filter((skill) => skill.family === 'tools')
    blocs = {
      Langages: languages,
      'Frameworks/CMS': frameworks,
      'Outils/OS': tools,
      'Bases de données': bdds,
    }
  }
  return (
    <section id="skills" className="skills reveal-up">
      <h2 className="reveal-1">Mes compétences</h2>
      <div className="skills-wrapper" ref={containerRef}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {Object.entries(blocs).map(([category, items]) => (
              <div className="skills-cat reveal-up" key={category}>
                <h3 className="reveal-2">{category}</h3>
                <div className="cat-wrapper reveal-3">
                  {items.map((item) => {
                    return (
                      <SkillBar
                        key={`${item.id}-${item.title}`}
                        name={item.title}
                        level={item.level}
                        img={item.img}
                        bgColor={item.bgColor}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      {error ? (
        <div className="error-container">
          <p>
            Oups, une erreur s&apos;est produite lors du chargement des données
          </p>
          <p>Veuillez recharger la page svp ...</p>
        </div>
      ) : (
        ''
      )}
    </section>
  )
}
