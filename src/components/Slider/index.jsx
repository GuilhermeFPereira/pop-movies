import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../Card'
import { Container } from './styles'

function Slider({ info, title }) {
  // o children,tem esse nome obrigatorio, estou pegando o valor que esta sendo enviado la do home

  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Slider
