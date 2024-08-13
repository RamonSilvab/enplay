import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Game</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
      distinctio dicta similique fugiat, aperiam at voluptatibus inventore eos
      dolorum libero nisi aliquid itaque reiciendis pariatur et quo numquam,
      laudantium alias.
    </Descricao>
  </Card>
)

export default Product
