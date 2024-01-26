import React from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { TextInput } from '../../components/TextInput'
import {
  AddressContainer,
  AddressForm,
  Button,
  CartContainer,
  CoffeesContainer,
  CoffeesList,
  Header,
  InfoTitle,
  InfoValue,
  OrderInfo,
  PaymentForm,
  PaymentMethod,
  Title,
} from './styles'
import { RadioInput } from '../../components/RadioInput'
import { coffees } from '../../../data.json'
import { Coffee } from '../../components/Coffee'

export function Cart() {
  const [paymentMethod, setPaymentMethod] = React.useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPaymentMethod(event.target.value)
    console.log(event.target.value)
  }

  return (
    <CartContainer>
      <AddressContainer>
        <Title>Complete your order</Title>
        <form id="order">
          <AddressForm>
            <Header>
              <MapPinLine size={22} />
              <div>
                <h3>Delivery address</h3>
                <p>Provide the address you want to receive your order at</p>
              </div>
            </Header>
            <TextInput placeHolder="zip code" className="zipCode" />
            <TextInput placeHolder="street" />
            <div>
              <TextInput placeHolder="number" />
              <TextInput placeHolder="reference" className="reference" />
            </div>
            <div>
              <TextInput placeHolder="neighbourhood" />
              <TextInput placeHolder="city" className="city" />
              <TextInput placeHolder="state" />
            </div>
          </AddressForm>
          <PaymentForm>
            <Header>
              <CurrencyDollar size={22} />
              <div>
                <h3>Payment</h3>
                <p>
                  The payment is made upon delivery. Choose the payment method
                  you prefer.
                </p>
              </div>
            </Header>
            <PaymentMethod>
              <RadioInput
                value="credit"
                isSelected={paymentMethod === 'credit'}
                onChange={handleChange}
              >
                <CreditCard size={16} />
                <span>Credit card</span>
              </RadioInput>
              <RadioInput
                value="debit"
                isSelected={paymentMethod === 'debit'}
                onChange={handleChange}
              >
                <Bank size={16} />
                <span>Debit card</span>
              </RadioInput>
              <RadioInput
                value="cash"
                isSelected={paymentMethod === 'cash'}
                onChange={handleChange}
              >
                <Money size={16} />
                <span>Cash</span>
              </RadioInput>
            </PaymentMethod>
          </PaymentForm>
        </form>
      </AddressContainer>
      <CoffeesContainer>
        <Title>Selected coffees</Title>
        <CoffeesList>
          {coffees.map((coffee) => {
            return <Coffee key={coffee.id} {...coffee} />
          })}
          <OrderInfo>
            <InfoTitle>items</InfoTitle>
            <InfoValue>29.70</InfoValue>
          </OrderInfo>
          <OrderInfo>
            <InfoTitle>delivery</InfoTitle>
            <InfoValue>3.5</InfoValue>
          </OrderInfo>
          <OrderInfo>
            <InfoTitle className="bold">total</InfoTitle>
            <InfoValue className="bold">33.2</InfoValue>
          </OrderInfo>
          <Button>Confirm order</Button>
        </CoffeesList>
      </CoffeesContainer>
    </CartContainer>
  )
}
