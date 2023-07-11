import api from './api'

// Aqui esta fazendo a busca do filme inicial da TextTrackList, cards e tudo
export async function getMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results[11]
}

export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')
  return results
}

export async function getTopSeries() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated')

  return results
}

export async function getPopularSeries() {
  const {
    data: { results }
  } = await api.get('/tv/popular')

  return results
}

export async function getTopPeople() {
  const {
    data: { results }
  } = await api.get('/person/popular')

  return results
}

// busca um filme pelo ID
export async function getMovie(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/videos`)

  return results[0]
}
