import { Container } from './styles'
import { Minus, Plus } from 'phosphor-react'

export function AddOrRemoveCoffee() {
  return (
    <Container>
      <button>
        <Minus size={14} />
      </button>
      <span>1</span>
      <button>
        <Plus size={14} />
      </button>
    </Container>
  )
}
