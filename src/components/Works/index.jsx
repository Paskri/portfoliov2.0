'use client'
import './works.css'
import Loader from '../Loader'
import Scramble from '../Scramble'
import Work from '../Work'
import CurveUp from '../CurveUp'
import CurveDown from '../CurveDown'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Works() {
  const { data, error, isLoading } = useSWR(
    'https://api.krieg.fr/wp-json/wp/v2/project?per_page=100',
    fetcher
  )
  //const reversedWorks = data ? data.slice().reverse() : []

  return (
    <>
      <CurveUp color="#E2F2FF" />
      <section id="works" className="works">
        <div className="reveal-up">
          <h2 className="reveal-1">Quelques réalisations</h2>
        </div>
        {isLoading ? <Loader /> : ''}
        <div className="works-container">
          {isLoading
            ? ''
            : data.map((work, index) => (
                <Work
                  key={`work-${work.id}`}
                  loading={isLoading}
                  work={work}
                  index={index}
                />
              ))}
        </div>
        {error ? (
          <div className="error-container">
            Oups, une erreur s&apos;est produite lors du chargement des données
          </div>
        ) : (
          ''
        )}
      </section>
      <CurveDown color="#E2F2FF" />
    </>
  )
}
