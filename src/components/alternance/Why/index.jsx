import './why.css'
import '../../Human/human.css'
import Postit from '../../Postit'
import CurveUp from '../../CurveUp'
import CurveDown from '../../CurveDown'

export default function Why() {
  return (
    <>
      <CurveUp color="#E2F2FF" />
      <section id="why" className="human-container">
        <div className="reveal-up">
          <h2 className="reveal-1">Pourquoi l&apos;alternance ?</h2>
        </div>
        <div className="human-wrapper">
          <div className="reveal-right block-content">
            <div className="human-content reveal-2">
              <Postit text="Vos besoins" />
              <h3>Formez-moi</h3>
              <p>
                Vous avez des outils spécifiques, des codes internes, des
                procédures particulières ? Vous pouvez me former à votre propre
                mode de fonctionnement. le maître d&apos;apprentissage pourra,
                dans le cadre de ce contrat et de par sa relation privilégiée
                avec moi, m&apos;enseigner les subtilités de vos méthodologies.
              </p>
            </div>
            <div className="mgn-top reveal-4">
              <a
                href="https://www.alternance.emploi.gouv.fr/simulateur-employeur/etape-1"
                target="_blank"
                className="why-btn"
              >
                -&gt; Simulateur officiel
              </a>
            </div>
          </div>
          <div className="reveal-up block-content">
            <div className="human-content reveal-3">
              <Postit text="Amortis" />
              <h3>12, 24 ou 36 mois</h3>
              <p>
                Le temps de formation lors de la prise de poste est amorti
                facilement sur une durée qu&apos;il nous faudra définir
                conjointement avec l&apos;école. Cette durée, plus longue que
                pour un stage vous permet de rentabiliser le rapport
                formation/service opérationnel.
              </p>
              <p>
                Aussi, l&apos;alternance peut être envisagée comme une periode
                d&apos;essai de longue durée.
              </p>
            </div>
            <div className="mgn-top reveal-4">
              <a
                href="https://www.alternance.emploi.gouv.fr/accueil"
                target="_blank"
                className="why-btn"
              >
                -&gt; Portail de l&apos;alternance
              </a>
            </div>
          </div>
          <div className="reveal-left block-content">
            <div className="human-content reveal-4">
              <Postit text="& Financés" />
              <h3>Rémunération</h3>
              <p>Il y a plusieurs avantages : </p>
              <ul>
                <li>
                  Le salaire d&apos;un alternant est moins élevé que celui
                  d&apos;un contrat classique.
                </li>
                <li>Vous bénéficiez d&apos;aides de l&apos;état</li>
                <li>
                  Une prime peut être versée au maitre d&apos;apprentissage
                  désigné pour m&apos;encadrer afin de valoriser son travail.
                </li>
                <li>
                  Une prime de 2000€ supplémentaire à l&apos;embauche des plus
                  de 45 ans
                </li>
              </ul>
            </div>
            <div className="mgn-top reveal-4">
              <a
                href="https://travail-emploi.gouv.fr/ministere/acteurs/partenaires/opco"
                target="_blank"
                className="why-btn"
              >
                -&gt; Opérateurs de compétences
              </a>
            </div>
          </div>
        </div>
      </section>
      <CurveDown color="#E2F2FF" />
    </>
  )
}
