import { CoffeeContainer, RemoveCoffee, Options, Price, Title } from './styles'
import { Trash } from 'phosphor-react'
import { AddOrRemoveCoffee } from '../AddOrRemoveCoffee'

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
          <AddOrRemoveCoffee />
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
