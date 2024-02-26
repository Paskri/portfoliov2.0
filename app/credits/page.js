import './credits.css'
import Headerpage from '../../src/layout/Headerpage'
export default function page() {
  return (
    <>
      <Headerpage />
      <main style={{ height: '100vh' }}>
        <h1>Crédits</h1>
        <p>Logo et germes d&apos;idées : Nicolas Peyraud</p>
        <p>Illustrations : upklyak sur FreePik</p>
        <p>https://fr.freepik.com/auteur/upklyak</p>
        <p>Retouches : Léane Krieg</p>
        <div className="thanks">
          <p>
            Merci à tous pour votre soutien, vos idées, votre travail, vos
            conseils, votre temps et nos fous-rires.
          </p>
        </div>

        <a href="/">Retour à l&apos;accueil</a>
      </main>
    </>
  )
}
