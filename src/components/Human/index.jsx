import './human.css'
import CurveDown from '../CurveDown'
import CurveUp from '../CurveUp'
import Postit from '../Postit'
export default function Human(props) {
  return (
    <>
      <CurveUp color="#E2F2FF" />
      <section id="about" className="human-container">
        <div className="human-global-wrapper">
          <div className="reveal-up">
            <h2 className="reveal-1">Je suis ... </h2>
          </div>
          <div className="human-wrapper">
            <div className="reveal-right block-content">
              <div className="human-content reveal-2">
                <Postit text="Étude de K" />
                <h3>À votre écoute</h3>
                <p>
                  Mon objectif premier: <span>Votre réussite</span>. Votre
                  succès repose sur une écoute attentive de{' '}
                  <span>vos besoins</span>. Mon job est de{' '}
                  <span>donner vie à votre vision</span> avec mes lignes de
                  code.
                </p>
              </div>
            </div>
            <div className="reveal-up block-content">
              <div className="human-content reveal-3">
                <Postit text="Pour tous les K" />
                <h3>Flexible</h3>
                <p>
                  Chaque projet étant unique,{' '}
                  <span>je m&apos;adapte à vos besoins</span> avec souplesse et
                  versatilité pour vous offrir une{' '}
                  <span>solution personnalisée</span> qui comblera toutes vos
                  attentes.
                </p>
              </div>
            </div>
            <div className="reveal-left block-content">
              <div className="human-content reveal-4">
                <Postit text="Dans tous les K" />
                <h3>Compétent</h3>
                <p>
                  <span>Mon savoir-faire</span> fera la différence. Je maîtrise{' '}
                  <span>les outils les plus récents</span>, à la pointe de la
                  technologie du web. Je peux vous garantir{' '}
                  <span>la meilleure expérience possible </span>à vos
                  utilisateurs et donc{' '}
                  <span>le meilleur retour sur investissement pour vous</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CurveDown color="#E2F2FF" />
    </>
  )
}
