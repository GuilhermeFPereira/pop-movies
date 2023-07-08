import { useState, useEffect } from 'react'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import api from '../../services/api'
import { getImages } from '../../utils/getImages'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'

function Home() {
  const [showModal, setShowModal] = useState(false) // como ele comeca falso, ele nao vai comecar mostrando as coisas na tela
  const [movie, setMovie] = useState() // useState que coloca as informacoes na tela
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [topPeople, setTopPeople] = useState()

  useEffect(() => {
    async function getMovies() {
      // precisa por o async, quando a funcao vai acessar algum dado em outro servidor, isso demora , entao eh necessario
      const {
        data: { results }
      } = await api.get('/movie/popular') // estou desestruturando e pegando so o results

      setMovie(results[5])
    }

    async function getTopMovies() {
      const {
        data: { results }
      } = await api.get('/movie/top_rated')

      setTopMovies(results)
    }

    async function getTopSeries() {
      const {
        data: { results }
      } = await api.get('/tv/top_rated')

      setTopSeries(results)
    }

    async function getPopularSeries() {
      const {
        data: { results }
      } = await api.get('/tv/popular')

      setPopularSeries(results)
    }

    async function getTopPeople() {
      const {
        data: { results }
      } = await api.get('/person/popular')

      setTopPeople(results)
    }

    getTopSeries()
    getTopMovies()
    getMovies()
    getPopularSeries()
    getTopPeople()
  }, []) // dentro do [] eh a condicao para chamar essa funcao  --> ele vazio, so vai chamar quando iniciar a tela

  /* estou enviando o que quero aqui, e meus props estao recebendo la no styles */
  /* o codigo so funciona, quando o movie && todo o resto, for true/verdadeiro --> funciona como um If */

  // se o showModal for verdadeiro e o resto do modal tambem , ai sim mostra na tela
  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red>Assista Agora</Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img alt="Capa-do-Filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Series'} />}
      {popularSeries && (
        <Slider info={popularSeries} title={'Series Populares'} />
      )}
      {topPeople && (
        <Slider info={topPeople} title={'Pessoas mais populares'} />
      )}
    </>
  )
}

export default Home
