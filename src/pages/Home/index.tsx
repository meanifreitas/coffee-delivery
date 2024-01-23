import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  HomeContainer,
  Info,
  Title,
  Subtitle,
  InfoContent,
  InfoContainer,
  CoffeeList,
} from './styles'
import CoffeeCup from '../../assets/coffee-cup.svg'
import { coffees } from '../../../data.json'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <HomeContainer>
      <InfoContainer>
        <Info>
          <Title>Find the perfect coffee any time</Title>
          <Subtitle>
            With Coffee Delivery, you get your coffee wherever you are at any
            time
          </Subtitle>
          <InfoContent>
            <div>
              <p className="cart">
                <span>
                  <ShoppingCart size={16} weight="fill" />
                </span>{' '}
                Simple and safe purchase
              </p>
              <p className="package">
                <span>
                  <Package size={16} weight="fill" />
                </span>{' '}
                Package keeps the coffee untouched
              </p>
            </div>
            <div>
              <p className="timer">
                <span>
                  <Timer size={16} weight="fill" />
                </span>{' '}
                Fast and tracked delivery
              </p>
              <p className="coffee">
                <span>
                  <Coffee size={16} weight="fill" />
                </span>{' '}
                The coffee arrives still fresh
              </p>
            </div>
          </InfoContent>
        </Info>
        <img src={CoffeeCup} alt="" />
      </InfoContainer>
      <h1>Our coffees</h1>
      <CoffeeList>
        {coffees.map((coffee) => {
          return (
            <Card
              key={coffee.id}
              title={coffee.title}
              description={coffee.description}
              tags={coffee.tags}
              image={coffee.image}
              price={coffee.price}
            />
          )
        })}
      </CoffeeList>
    </HomeContainer>
  )
}
