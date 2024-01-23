import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { HomeContainer, Info, Title, Subtitle, InfoContent } from './styles'
import CoffeeCup from '../../assets/coffee-cup.svg'

export function Home() {
  return (
    <HomeContainer>
      <Info>
        <Title>Find the perfect coffee any time</Title>
        <Subtitle>
          With Coffee Delivery, you get your coffee wherever you are at any time
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
    </HomeContainer>
  )
}
