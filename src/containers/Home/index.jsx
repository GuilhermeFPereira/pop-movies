import api from '../../services/api'

function Home() {
  async function getMovies() {
    // precisa por o async, quando a funcao vai acessar algum dado em outro servidor, isso demora , entao eh necessario
    const data = await api.get('/movie/popular')

    console.log(data)
  }
  getMovies()

  return (
    <div>
      <h1>Home</h1>
      <p>Essa eh a home</p>
    </div>
  )
}

export default Home
