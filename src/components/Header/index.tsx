import { HeaderContainer, Cart } from './styles'
import Logo from '../../assets/logo.svg'
import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import React from 'react'
import { Location } from '../Location'

export default function Header() {
  const [cartCount, setCartCount] = React.useState(0)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="Coffee Delivery logo" />
      </NavLink>
      <div>
        <Location />
        <NavLink to="/cart" title="Cart">
          <Cart>
            <ShoppingCart size={22} weight="fill" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Cart>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
