import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' // ele que eh responsavel por buscar o ID

import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos
} from '../../services/getData'
import { Container } from './styles'

function Detail() {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [movieVideos, setMovieVideos] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieSimilar, setMovieSimilar] = useState()
  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id)
      ])
        .then(([movie, videos, credits, similar]) => {
          console.log({ movie, videos, credits, similar })
          // fez isso para chamar na ordem correta, cada nome aqui, eh a ordem que esta no array , ele usou [] para desestruturar , e deu um NOME para cada posicao do array, ele escolheu o nome
          setMovie(movie)
          setMovieVideos(videos)
          setMovieCredits(credits)
          setMovieSimilar(similar)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <Container>
      <div>Detalhe</div>
    </Container>
  )
}

export default Detail
