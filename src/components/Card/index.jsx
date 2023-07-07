import { getImages } from '../../utils/getImages'
import { Container } from './styles'

function Card({ item }) {
  // o children,tem esse nome obrigatorio, estou pegando o valor que esta sendo enviado la do home

  return (
    <Container>
      <img src={getImages(item.poster_path)} />
      <h3>{item.title}</h3>
    </Container>
  )
}

export default Card
