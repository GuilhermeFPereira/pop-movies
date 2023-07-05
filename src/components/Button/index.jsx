import { ButtonRed, ButtonWhite } from './styles'

function Button({ children, red }) {
  // o children,tem esse nome obrigatorio, estou pegando o valor que esta sendo enviado la do home

  return (
    <>
      {red ? (
        <ButtonRed>{children}</ButtonRed>
      ) : (
        <ButtonWhite>{children}</ButtonWhite>
      )}
    </>
  )
}

export default Button
