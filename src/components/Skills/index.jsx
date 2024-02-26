'use client'
import SkillBar from '../SkillBar'
//import Scramble from '../Scramble'
import Loader from '../Loader'
import './skills.css'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Skills({ skills: serverSkills, error, loading }) {
  const {
    data,
    error: swrError,
    isLoading: swrIsLoading,
  } = useSWR('https://api.krieg.fr/api/skills', fetcher)
  let skills = []
  if (data && data !== serverSkills) {
    skills = data
  } else {
    skills = serverSkills
  }

  const languages = skills.filter((skill) => skill.family === 'Langages')
  const frameworks = skills.filter((skill) => skill.family === 'Frameworks/CMS')
  const bdds = skills.filter((skill) => skill.family === 'Bases de données')
  const tools = skills.filter((skill) => skill.family === 'Outils/OS')
  const blocs = {
    Langages: languages,
    'Frameworks/CMS': frameworks,
    'Outils/OS': tools,
    'Bases de données': bdds,
  }

  return (
    <section id="skills" className="skills reveal-up">
      <h2 className="reveal-1">Mes compétences</h2>
      <div className="skills-wrapper">
        {loading ? (
          <Loader />
        ) : (
          <>
            {Object.entries(blocs).map(([category, items]) => (
              <div className="skills-cat reveal-up" key={category}>
                <h3 className="reveal-2">{category}</h3>
                <ul className="cat-wrapper reveal-3">
                  {items.map((item) => (
                    <SkillBar
                      key={`${item.id}-${item.name}`}
                      name={item.name}
                      level={item.level}
                      img={item.pureName}
                      bgColor={item.bgColor}
                    />
                  ))}
                </ul>
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
/* Old skills : 
<div className="skills-wrapper reveal-2">
              {skills.map((skill) => (
                <SkillBar
                  key={`${skill.id}-${skill.name}`}
                  name={skill.name}
                  level={skill.level}
                  img={skill.pureName}
                  bgColor={skill.bgColor}
                />
              ))}
            </div>
            */
