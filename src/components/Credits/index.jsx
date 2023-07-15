import { getImages } from '../../utils/getImages'
import { Title, Container } from './styles'

function Credits({ credits }) {
  console.log({ credits })
  return (
    <>
      <Title>Créditos</Title>
      {credits && (
        <Container>
          {credits.slice(0, 6).map((artist) => (
            <div key={artist.id}>
              <img src={getImages(artist.profile_path)} />
              <p>{artist.original_name}</p>
            </div>
          ))}
          <div></div>
        </Container>
      )}
    </>
  )
}

export default Credits
