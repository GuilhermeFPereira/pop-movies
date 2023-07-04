import { useState, useEffect } from 'react'

import api from '../../services/api'
import { Background, Info, Poster, Container } from './styles'

function Home() {
  const [movie, setMovie] = useState() // useState que coloca as informacoes na tela

  useEffect(() => {
    async function getMovies() {
      // precisa por o async, quando a funcao vai acessar algum dado em outro servidor, isso demora , entao eh necessario
      const {
        data: { results }
      } = await api.get('/movie/popular') // estou desestruturando e pegando so o results

      setMovie(results[1])
    }

    getMovies()
  }, []) // dentro do [] eh a condicao para chamar essa funcao  --> ele vazio, so vai chamar quando iniciar a tela

  /* estou enviando o que quero aqui, e meus props estao recebendo la no styles */
  /* o codigo so funciona, quando o movie && todo o resto, for true/verdadeiro --> funciona como um If */
  return (
    <>
      {movie && (
        <Background
          img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </Info>
            <Poster>
              <img
                alt="Capa-do-Filme"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  )
}

export default Home
