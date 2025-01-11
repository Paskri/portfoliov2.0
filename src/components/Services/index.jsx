'use client'
import { useState, useEffect } from 'react'
import CurveDown from '../CurveDown'
import CurveUp from '../CurveUp'
import Postit from '../Postit'
import Scramble from '../Scramble'
import './services.css'
import ReactModal from 'react-modal'
import Image from 'next/image'
//react-modal custom style
const customStyle = {
  overlay: {
    width: '100vw',
    maxWidth: '1440px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    overflow: 'auto',
    padding: '0',
    zIndex: 200,
    margin: '0 auto',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    border: 'none',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
}
export default function Services() {
  const [isOpen, setIsOpen] = useState()

  function toggleModal(e) {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  //toggle header visibility
  useEffect(() => {
    if (isOpen) {
      document.querySelector('header').classList.add('hidden')
    } else {
      document.querySelector('header').classList.remove('hidden')
    }
  }, [isOpen])

  return (
    <>
      <CurveUp color="#E2F2FF" />
      <section id="services" className="services">
        <div className="services-wrapper">
          <div className="reveal-up">
            <h2 className="reveal-1">Mes services</h2>
          </div>
          <div className="services-container">
            <div className="reveal-right block-content">
              <div className="service-container reveal-2">
                <div className="service-content">
                  <Postit text="Y a plus K" />
                  <h3>CRÉATION</h3>
                  <div className="service-text">
                    <p>
                      Création d&apos;une solution web sur mesure pour votre
                      activité.
                    </p>
                    <ul>
                      <li>Site one page</li>
                      <li>Site vitrine</li>
                      <li>Site eCommerce</li>
                    </ul>
                    <p>
                      Réalisation fully responsive mobile first ou desktop first
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal-up block-content">
              <div className="service-container reveal-3">
                <div className="service-content">
                  <Postit text="Au K ou" />
                  <h3>OPTIMISATION</h3>

                  <div className="service-text">
                    <p>Parce que votre site mérite d&apos;être vu.</p>
                    <ul>
                      <li>Optimisation SEO, référencement</li>
                      <li>Optimisation des performances techniques</li>
                      <li>Optimisation de l&apos;accessibilité</li>
                      <li>Bonnes pratiques</li>
                    </ul>
                    <p>Audit gratuit sur simple demande</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal-left block-content">
              <div className="service-container reveal-4">
                <div className="service-content">
                  <Postit text="En K de pépin" />
                  <h3>MAINTENANCE</h3>
                  <div className="service-text">
                    <p>
                      Restez à la page dans un monde en perpétuelle évolution.
                    </p>
                    <ul>
                      <li>Maintenance corrective</li>
                      <li>Ajout de fonctionnalités</li>
                      <li>Mise à jour</li>
                      <li>Sauvegardes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<div className="boosted-text">
          <a href="#" onClick={toggleModal}>
            Consultez mes tarifs
          </a>
        </div>*/}
        </div>
      </section>
      <CurveDown color="#E2F2FF" />
      <ReactModal
        className="tarifs-modal"
        isOpen={isOpen}
        onRequestClose={toggleModal}
        style={customStyle}
        contentLabel={`Tarifs modal`}
      >
        <div className="modal-top">
          <Image
            onClick={toggleModal}
            className="close"
            src={require(`../../assets/close.svg`).default}
            alt="close cross"
          />
        </div>
        <div className="modal-middle">
          <h2>Tarifs 2023</h2>
          <div className="tarif-table">
            <h3>Création de site :</h3>
            <div className="tarifs-line">
              <h4>Site one page</h4>
              <span>690€</span>
            </div>
            <div className="tarifs-line">
              <h4>Site 0 à 5 pages</h4>
              <span>990€</span>
            </div>
            <div className="tarifs-line">
              <h4>Site 6 à 10 pages</h4>
              <span>1290€</span>
            </div>
            <div className="tarifs-line">
              <h4>Site eCommerce</h4>
              <span>1890€</span>
            </div>
            <div className="tarifs-line">
              <h4>Refonte d&apos;un site existant</h4>
              <span>Selon situation</span>
            </div>
            <h3>Optimisation :</h3>
            <div className="tarifs-line">
              <h4>Forfait optimisation</h4>
              <span>790€</span>
            </div>
            <h3>Maintenance :</h3>
            <div className="tarifs-line">
              <h4>Forfait mensuel</h4>
              <span>90€</span>
            </div>
            <div className="tarifs-line">
              <h4>Forfait Annuel</h4>
              <span>790€</span>
            </div>
          </div>
        </div>
        <div className="modal-bottom">
          <p>
            Ces tarifs sont donnés ici à titre de référence et sont susceptibles
            de varier selon la complexité des fonctionnalités souhaitées
          </p>
        </div>
        <div className="boosted-text">
          <a href="#">Demandez votre devis personnalisé</a>
        </div>
      </ReactModal>
    </>
  )
}
