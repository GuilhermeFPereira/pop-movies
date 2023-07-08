import { ButtonRed, ButtonWhite } from './styles'

function Button({ children, red, ...rest }) {
  // ... rest --> significa que ele vai mandar todos os components que tiver recebendo la do button de HOME // pode ser rest ou props
  // o children,tem esse nome obrigatorio, estou pegando o valor que esta sendo enviado la do home

  return (
    <>
      {red ? (
        <ButtonRed {...rest}>{children}</ButtonRed>
      ) : (
        <ButtonWhite {...rest}>{children}</ButtonWhite>
      )}
    </>
  )
}

export default Button
