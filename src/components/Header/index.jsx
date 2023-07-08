import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom' // useLocation, serve pra falar a pagina exata que esta

import Logo from '../../assets/movie.png'
import { Container, Menu, Li } from './styles'

function Header() {
  const [changeBackground, setChangeBackground] = useState(false)
  const { pathname } = useLocation() // eh uma desestruturacao

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 120) {
      // caso changeBackground for falso , ou seja nao ter mudado ainda,  e o window.pageYOffset for a cima de 120 , ao o background muda de cor pq fica true
      setChangeBackground(true)
      // se quando eu scrolar minha tela, e passar dos 120, vai ser true
    }
    if (changeBackground && window.pageYOffset <= 120) {
      setChangeBackground(false)
      // se o changeBackground ja ter mudado e o window tiver menor que 120 , ai o setchangeBackground muda pra falso e deixa de mostrar no background
    }
  }

  return (
    <Container changeBackground={changeBackground}>
      <img src={Logo} alt="logo-pop-movies" />
      <Menu>
        <Li
          isActive={
            pathname === '/' /* Se pathname for == a /, entao eh true */
          }
        >
          <Link to="/">Home</Link>
        </Li>

        <Li
          isActive={
            pathname.includes(
              'filmes'
            ) /* Esse includes, significa que se ele achar 'filmes' em algum momento , entao eh true */
          }
        >
          <Link to="/filmes">Filmes</Link>
        </Li>

        <Li isActive={pathname.includes('series')}>
          <Link to="/series">Series</Link>
        </Li>
      </Menu>
    </Container>
  )
}

export default Header
