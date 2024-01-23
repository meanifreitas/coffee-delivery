import { HeaderContainer, Location, Cart } from './styles'
import Logo from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="Coffee Delivery logo" />
      </NavLink>
      <div>
        <Location>
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </Location>
        <NavLink to="/cart" title="Cart">
          <Cart>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
