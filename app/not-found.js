import Link from 'next/link'
import './error.css'
export default function Error() {
  return (
    <section className="error">
      <p className="four-o-four">404</p>
      <p className="oups">Oups ! La page que vous demandez n&apos;existe pas</p>
      <Link href="/">Retourner sur la page d&apos;accueil</Link>
    </section>
  )
}
