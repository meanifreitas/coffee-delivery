import { CoffeeContainer } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'

interface Props {
  image: string
  title: string
  price: string
}

export function Coffee({ image, title, price }: Props) {
  return (
    <CoffeeContainer>
      <img src={image} alt="" />
      <div>
        <p>{title}</p>
        <div>
          <button>
            <Minus size={14} />
          </button>
          <span>1</span>
          <button>
            <Plus size={14} />
          </button>
        </div>
        <div>
          <Trash />
          Remove
        </div>
      </div>
      <p>{price}</p>
    </CoffeeContainer>
  )
}
