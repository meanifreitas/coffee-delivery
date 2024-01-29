import React, { useContext } from 'react'
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
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useCart } from '../../hooks/useCart'

type FormInputs = {
  zipCode: number
  street: string
  number: string
  reference: string
  neighbourhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
  zipCode: z.number(),
  street: z.string().min(1, 'Fill out the street name'),
  number: z.string().min(1, 'Fill out the number'),
  reference: z.string(),
  neighbourhood: z.string().min(1, 'Fill out the Neighbourhood'),
  city: z.string().min(1, 'Fill out the city name'),
  state: z.string().min(1, 'Fill out the state name'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Select a payment method',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

export function Cart() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })

  const { cart, checkout, incrementItem, decrementItem, removeItem } = useCart()

  const paymentMethod = watch('paymentMethod')

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert('Cart empty!')
    }

    checkout(data)
  }

  return (
    <CartContainer>
      <AddressContainer>
        <Title>Complete your order</Title>
        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
          <AddressForm>
            <Header>
              <MapPinLine size={22} />
              <div>
                <h3>Delivery address</h3>
                <p>Provide the address you want to receive your order at</p>
              </div>
            </Header>
            <TextInput
              placeHolder="zip code"
              className="zipCode"
              error={errors.zipCode}
              {...register('zipCode')}
            />
            <TextInput
              placeHolder="street"
              error={errors.street}
              {...register('street')}
            />
            <div>
              <TextInput placeHolder="number" error={errors.number} />
              <TextInput
                placeHolder="reference"
                className="reference"
                error={errors.reference}
                {...register('reference')}
              />
            </div>
            <div>
              <TextInput
                placeHolder="neighbourhood"
                error={errors.neighbourhood}
                {...register('neighbourhood')}
              />
              <TextInput
                placeHolder="city"
                className="city"
                error={errors.city}
                {...register('city')}
              />
              <TextInput
                placeHolder="state"
                error={errors.state}
                {...register('state')}
              />
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
                {...register('paymentMethod')}
              >
                <CreditCard size={16} />
                <span>Credit card</span>
              </RadioInput>
              <RadioInput
                value="debit"
                isSelected={paymentMethod === 'debit'}
                {...register('paymentMethod')}
              >
                <Bank size={16} />
                <span>Debit card</span>
              </RadioInput>
              <RadioInput
                value="cash"
                isSelected={paymentMethod === 'cash'}
                {...register('paymentMethod')}
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
          <Button type="submit" form="order">
            Confirm order
          </Button>
        </CoffeesList>
      </CoffeesContainer>
    </CartContainer>
  )
}
