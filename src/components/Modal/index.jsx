import { useEffect, useState } from 'react'

import { getMovieVideos } from '../../services/getData'
import { Container, Background } from './styles'

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovieVideos(movieId))
    }

    getMovies()
  }, [])

  // depois que ele for na api, e pegar o movie, ai sim vai rodar o resto

  // o onClick no background , faz chamar a funcao setShowModal, e como ela faz voltar a ficar false, automaticamente o video para de aparecer
  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal
