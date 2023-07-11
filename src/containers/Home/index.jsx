import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getMovies,
  getPopularSeries,
  getTopMovies,
  getTopPeople,
  getTopSeries
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'

function Home() {
  const [showModal, setShowModal] = useState(false) // como ele comeca falso, ele nao vai comecar mostrando as coisas na tela
  const [movie, setMovie] = useState() // useState que coloca as informacoes na tela
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [topPeople, setTopPeople] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    // async function getAllData() {
    //   setMovie(await getMovies())
    //   setTopMovies(await getTopMovies())
    //   setTopSeries(await getTopSeries())
    //   setPopularSeries(await getPopularSeries())
    //   setTopPeople(await getTopPeople())
    //   console.timeEnd('time')
    // }

    // getAllData()

    async function getAllData() {
      // fazer dessa maneira e fazer da maneira de cima , da na mesma , porem , usando promise.all , ele chama a API todas de uma vez , fazendo ficar super rapido
      // nao precisa por o await, pq o promise ja faz isso

      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeople()
      ])
        .then(([movie, topMovies, topSeries, popularSeries, topPeople]) => {
          // fez isso para chamar na ordem correta, cada nome aqui, eh a ordem que esta no array , ele usou [] para desestruturar , e deu um NOME para cada posicao do array, ele escolheu o nome
          setMovie(movie)
          setTopMovies(topMovies)
          setTopSeries(topSeries)
          setPopularSeries(popularSeries)
          setTopPeople(topPeople)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
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
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assista Agora
                </Button>
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
