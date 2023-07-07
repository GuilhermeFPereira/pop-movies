import styled from 'styled-components'

export const Container = styled.div`
  z-index: 99; // para ficar na frente de tudo
  position: fixed; // precisa do position fixed , para ele ficar fixo no lugar , mesmo dando rolagem na pagina
  top: 0; // para sempre ficar fixado no topo
  display: flex;
  padding: 10px 50px;
  justify-content: space-between;
  align-items: center;

  img {
    width: 25%;
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 30px;

  a {
    text-decoration: none;
    color: #ffffff;
  }
`
