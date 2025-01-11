'use client'
import './works.css'

//Components
import Loader from '../Loader'
import Scramble from '../Scramble'
import NewWork from '../NewWork'
import CurveUp from '../CurveUp'
import CurveDown from '../CurveDown'

//SWR
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

// SWIPER
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  A11y,
  EffectCoverflow,
  Autoplay,
} from 'swiper/modules'

export default function NewWorks() {
  const { data, error, isLoading } = useSWR(
    'https://api.krieg.fr/wp-json/wp/v2/project?per_page=100',
    fetcher
  )
  //const reversedWorks = data ? data.slice().reverse() : []

  return (
    <>
      <CurveUp color="#E2F2FF" />
      <section id="works" className="works">
        <div className="works-wrapper">
          <div className="reveal-up">
            <h2 className="reveal-1">Quelques réalisations</h2>
          </div>
          {isLoading ? <Loader /> : ''}
          <div className="works-container">
            <Swiper
              effect={'coverflow'}
              navigation
              loop={true}
              modules={[
                EffectCoverflow,
                Navigation,
                Pagination,
                A11y,
                Autoplay,
              ]}
              //onSwiper={(swiper) => console.log(swiper)}
              //onSlideChange={() => console.log('slide change')}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loopAdditionalSlides={3}
              a11y={{
                enabled: true,
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}',
              }}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 27,
                stretch: 100,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              style={{
                height: '300px',
                alignItems: 'center',
                display: 'flex',
                margin: '0 0 40px 0',
              }}
              speed={750}
            >
              {isLoading
                ? ''
                : data.map((work, index) => (
                    <SwiperSlide
                      key={`work-${work.id}`}
                      style={{
                        width: '90vw',
                        maxWidth: '420px',
                        height: '60vw',
                        maxHeight: '278px',
                        borderRadius: '15px',
                      }}
                    >
                      <NewWork loading={isLoading} work={work} index={index} />
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
          {error ? (
            <div className="error-container">
              Oups, une erreur s&apos;est produite lors du chargement des
              données
            </div>
          ) : (
            ''
          )}
        </div>
      </section>
      <CurveDown color="#E2F2FF" />
    </>
  )
}
