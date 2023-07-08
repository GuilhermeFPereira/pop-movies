import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100px;

  z-index: 99; // para ficar na frente de tudo
  position: fixed; // precisa do position fixed , para ele ficar fixo no lugar , mesmo dando rolagem na pagina
  top: 0; // para sempre ficar fixado no topo
  display: flex;
  padding: 10px 100px;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) =>
    props.changeBackground ? '#000000' : 'transparent'};
  transition: background-color 0.6s ease-in-out;

  width: 100%;
  img {
    width: 20%;
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 60px;
`

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 30px;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }
  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    // se o isActive for true , quero a barra 100% , se nao vai ser 0
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%; // ele joga o inicio da animacao para o meio da palavra
    transform: translateX(-50%);
    // ele joga devolta com -50 , pro inicio da apalavra
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    // o hover quer q altere apenas o after, e nao a Li inteira
    width: 100%;
  }
`
