import { Outlet } from 'react-router-dom'

import Header from '../components/Header'

function DefaultLayout() {
  return (
    <>
      <Header /* Todas as telas terao esse header em cima */ />
      <Outlet /* Serve Para encaixar o resto da tela embaixo do header */ />
    </>
  )
}

export default DefaultLayout

/* Poderia por um Footer embaixo do outlet, que teria em todas as telas tambem */
