'use client'
import SocialLink from '../../components/SocialLink'
import gitwhite from '../../assets/social-icons/git-white.webp'
import gitblack from '../../assets/social-icons/git-black.webp'
import inwhite from '../../assets/social-icons/linkedin-white.webp'
import inblack from '../../assets/social-icons/linkedin-black.webp'
import indeedwhite from '../../assets/social-icons/indeed-white.webp'
import indeedblack from '../../assets/social-icons/indeed-black.webp'
import './footer.css'
import CurveUp from '../../components/CurveUp'
import Link from 'next/link'

export default function Footer(props) {
  const { navLinks } = props
  const firstNav = navLinks.slice(0, 4)
  const secondNav = navLinks.slice(4, 7)

  const gitImage = {
    default: gitblack,
    hover: gitwhite,
  }

  const linkedinImage = {
    default: inblack,
    hover: inwhite,
  }

  const indeedImage = {
    default: indeedblack,
    hover: indeedwhite,
  }

  /*const ayaImage = {
    default: ayablack,
    hover: ayawhite,
  }*/

  return (
    <>
      <CurveUp color="#161c23" />
      <footer>
        <div className="footer-container">
          <div className="column-1">
            <ul>
              {firstNav.map((link) => (
                <li key={link.href + '-footer'}>
                  <Link href={`/#${link.href}`}>{link.txt}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="column-2">
            <SocialLink
              link="https://github.com/Paskri"
              image={gitImage}
              name="Github"
            />
            <SocialLink
              link="https://www.linkedin.com/in/pascal-krieg-153497136/"
              image={linkedinImage}
              name="LinkedIn"
            />
            <SocialLink
              link="https://profile.indeed.com/p/pascalk-71xs2nk"
              image={indeedImage}
              name="Indeed"
            />
          </div>
          <div className="column-3">
            <ul>
              {secondNav.map((link) => (
                <li key={link.href + '-footer'}>
                  <Link href={`/#${link.href}`}>{link.txt}</Link>
                </li>
              ))}
              <li>
                <Link href="/mentions-legales">Mentions légales</Link>
              </li>
              <li>
                <a href="credits">Crédits</a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            Réalisé par Pascal Krieg en Juin 2023
          </div>
        </div>
      </footer>
    </>
  )
}
