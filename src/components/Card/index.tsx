import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import {
  CardContainer,
  CoffeeImage,
  Tags,
  CoffeeTitle,
  CoffeeDescription,
  Checkout,
  Price,
  CartContainer,
  Cart,
} from './styles'
import { AddOrRemoveCoffee } from '../AddOrRemoveCoffee'

interface CardProps {
  title: string
  description: string
  tags: string[]
  price: string
  image: string
}

export function Card({ title, description, tags, price, image }: CardProps) {
  return (
    <CardContainer>
      <CoffeeImage src={image} alt={title} />
      <Tags>
        {tags.map((tag) => {
          return <p key={tag}>{tag}</p>
        })}
      </Tags>
      <CoffeeTitle>{title}</CoffeeTitle>
      <CoffeeDescription>{description}</CoffeeDescription>
      <Checkout>
        <Price>
          <span>$</span>
          <p>{price}</p>
        </Price>
        <CartContainer>
          <AddOrRemoveCoffee />
          <Cart>
            <ShoppingCartSimple size={20} weight="fill" />
          </Cart>
        </CartContainer>
      </Checkout>
    </CardContainer>
  )
}
