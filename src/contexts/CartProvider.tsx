import React, { ReactNode, createContext, useReducer } from 'react'
import { OrderInfo } from '../pages/Cart'
import { Item, Order, cartReducer } from '../reducers/cart/reducer'
import {
  addItemAction,
  checkoutCartAction,
  decrementItemAction,
  incrementItemAction,
  removeItemAction,
} from '../reducers/cart/actions'
import { useNavigate } from 'react-router-dom'

interface CartContextType {
  cart: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  removeItem: (itemId: Item['id']) => void
  decrementItem: (itemId: Item['id']) => void
  incrementItem: (itemId: Item['id']) => void
  checkout: (order: OrderInfo) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJson = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }

      return cartState
    },
  )

  const navigate = useNavigate()

  const { cart, orders } = cartState

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }

  function checkout(order: OrderInfo) {
    dispatch(checkoutCartAction(order, navigate))
  }

  function incrementItem(itemId: Item['id']) {
    dispatch(incrementItemAction(itemId))
  }

  function decrementItem(itemId: Item['id']) {
    dispatch(decrementItemAction(itemId))
  }

  React.useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        addItem,
        cart,
        orders,
        decrementItem,
        incrementItem,
        removeItem,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
