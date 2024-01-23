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

interface CardProps {
  id: string
  title: string
  description: string
  tags: string[]
  price: string
  image: string
}

export function Card({
  id,
  title,
  description,
  tags,
  price,
  image,
}: CardProps) {
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
          <div>
            <button>
              <Minus size={14} />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} />
            </button>
          </div>
          <Cart>
            <ShoppingCartSimple size={20} weight="fill" />
          </Cart>
        </CartContainer>
      </Checkout>
    </CardContainer>
  )
}
