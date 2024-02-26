import Image from 'next/image'
import rocket from '../../assets/rocket.webp'
import './booster.css'

export default function Booster() {
  return (
    <>
      <section id="booster">
        <div className="reveal-left">
          <h2 className="reveal-1">Propulsez votre activité en ligne</h2>
        </div>
        <div className="booster-wrapper">
          <div className="booster-left reveal-up">
            <Image
              className="reveal-2"
              src={rocket}
              width={200}
              height={364}
              alt={'Rocket lauching'}
            />
          </div>
          <div className="booster-right reveal-up">
            <p className="reveal-1">
              Ces dernières années internet est devenu et restera un
              incontournable quelque soit votre activité.
            </p>
            <ul>
              <li className="reveal-2">
                Dans le K où vous n&apos;avez pas encore sauté le pas,
                rassurez-vous, il n&apos;est pas trop tard.
              </li>
              <li className="reveal-2">
                Si vous avez déjà votre site, vous savez que des opérations de
                maintenance doivent être effectuées pour vous garantir une
                efficacité maximale. C&apos;est un K d&apos;école
              </li>
              <li className="reveal-3">
                Le K classique : vôtre site est trop vieux et il repose sur des
                technologies dépassées. Une refonte complète devrait être
                envisagée.
              </li>
              <li className="reveal-3">
                Enfin, un dernier K, sans un référencement pertinent, qui tienne
                compte de l&apos;évolutions des algorythmes des moteurs de
                recherche, votre site peut rapidement se retrouver sans
                visiteurs.
              </li>
            </ul>
            <div className="reveal-left">
              <div className="boosted-text reveal-4">
                <p>Quel que soit votre K de figure : Je peux vous aider !</p>
                <a href="#contact">Contactez-moi</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
