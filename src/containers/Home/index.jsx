import { useState } from 'react'

import api from '../../services/api'
import { Background } from './styles'

function Home() {
  const [movie, setMovie] = useState() // useState que coloca as informacoes na tela

  async function getMovies() {
    // precisa por o async, quando a funcao vai acessar algum dado em outro servidor, isso demora , entao eh necessario
    const data = await api.get('/movie/popular')

    setMovie(data.data.results[1])

    console.log(movie)
  }

  getMovies()

  /* estou enviando o que quero aqui, e meus props estao recebendo la no styles */
  return (
    <Background img="https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg">
      <h1>{movie.tittle}</h1>
      <p>Essa eh a home</p>
    </Background>
  )
}

export default Home
