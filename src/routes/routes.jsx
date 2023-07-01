import { Route, Routes } from 'react-router-dom'

import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout'

function Router() {
  return (
    <Routes>
      <Route
        element={
          <DefaultLayout /> /* Esta colocando um estilo global ah todas as telas, no caso um header la em cima */
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Route>
    </Routes>
  )
}

export default Router
