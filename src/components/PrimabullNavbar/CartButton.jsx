import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useState } from 'react'
import { useCart } from "../../common/context"
import { PrimabullButtonTypes } from "../PrimabullButton"
import { StyledCartButton, StyledCartNumber, StyledCartNumberBox } from "./style"

export default function CartButton() {
  const { setShowCart, cart } = useCart()
  const [hovered, setHovered] = useState(false);

  return <StyledCartButton
    onMouseOver={() => setHovered(true)}
    onMouseOut={() => setHovered(false)}
    variant={PrimabullButtonTypes.primary}
    startIcon={Object.values(cart).every(val => val === 0) ? <ShoppingCartIcon /> :
      <StyledCartNumberBox $hovered={hovered}>
        <StyledCartNumber>
          {Object.values(cart).reduce((acc, curr) => acc + curr, 0)}
        </StyledCartNumber>
      </StyledCartNumberBox>
    }
    size='large'
    onClick={() => setShowCart(true)}
  >Cart
  </StyledCartButton>
}