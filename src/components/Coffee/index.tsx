import {
  AddOrRemoveCoffee,
  CoffeeContainer,
  RemoveCoffee,
  Options,
  Price,
  Title,
} from './styles'
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
      <Options>
        <Title>{title}</Title>
        <div>
          <AddOrRemoveCoffee>
            <button>
              <Minus size={14} />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} />
            </button>
          </AddOrRemoveCoffee>
          <RemoveCoffee>
            <Trash />
            Remove
          </RemoveCoffee>
        </div>
      </Options>
      <Price>${price}</Price>
    </CoffeeContainer>
  )
}
