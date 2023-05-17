import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import Image from "next/legacy/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { isMobile } from "react-device-detect"
import { useCart } from "../../common/context"
import { PrimabullBody1, PrimabullH5, PrimabullH6 } from "../../common/styles"
import { PRODUCTS } from "../../data"
import {
  StyledBorder,
  StyledCloseButton, StyledCloseIcon,
  StyledEmptyDiv, StyledEmptyDivText,
  StyledFieldDiv,
  StyledFooter,
  StyledHeader,
  StyledLeftButton,
  StyledMobileProduct,
  StyledMobileTable,
  StyledMobileTotals,
  StyledModal, StyledPriceTotal, StyledProductImage,
  StyledProductName,
  StyledQuantityInput,
  StyledRemoveButtonMobile,
  StyledRightButton,
  StyledSubmitButton, StyledTableContainer, StyledTitle,
  StyledTotal
} from "./style"


export default function Cart() {

  const { cart, showCart, setShowCart, removeFromCart } = useCart();

  const router = useRouter();

  const routeToCheckout = () => {
    setShowCart(false);
    router.push('/checkout');
  }

  return <StyledModal
    show={showCart}
    onClose={setShowCart}
  >
    <StyledHeader>
      <StyledTitle>My Cart</StyledTitle>
      <CloseButton onClick={() => setShowCart(false)} />
    </StyledHeader>
    {Object.values(cart).every(val => val === 0) ?
      <EmptyDiv setShowCart={setShowCart} /> :
      <CartTable cart={cart} removeFromCart={removeFromCart} />
    }
    <StyledFooter>
      <StyledTotal><b>Total:</b>  ${total(cart)}</StyledTotal>

      <StyledSubmitButton size='large'
        disabled={Object.values(cart).every(val => val === 0)}
        onClick={routeToCheckout}
      >Checkout</StyledSubmitButton>
    </StyledFooter>
  </StyledModal>
}

function ProductName({ product }) {
  return <div>
    <StyledProductImage>
      <Image
        src={product.image}
        alt={'cart' + product.name}
        layout='fill'
        objectFit="cover"
      />
    </StyledProductImage>
    <StyledProductName>{product.name}</StyledProductName>
  </div>
}

function QuantityInput({ productKey }) {


  const { cart, increaseCart, decreaseCart, setCartValue } = useCart();

  const [value, setValue] = useState(cart[productKey]);

  const updateCart = newVal => {
    const valAsInt = parseInt(newVal);
    if (newVal !== '' && !isNaN(valAsInt)) {
      setCartValue(productKey, valAsInt)
    }
    setValue(newVal)
  }

  const addToCart = () => {
    if (value === '') {
      setValue(1);
      setCartValue(productKey, 1)
    }
    else {
      const newVal = parseInt(value) + 1
      setCartValue(productKey, newVal)
      setValue(newVal)
    }
  }
  const removeFromCart = () => {
    if (value !== '' || value !== 0) {
      const newVal = parseInt(value) - 1
      setCartValue(productKey, newVal)
      setValue(newVal)
    } else {
      setValue(0);
      setCartValue(productKey, 0)
    }
  }

  return <StyledFieldDiv>
    <StyledLeftButton disabled={value < 1} onClick={removeFromCart}>-</StyledLeftButton>
    <StyledQuantityInput
      borderless
      type='number'
      value={value}
      onChange={e => updateCart(e.target.value)} />
    <StyledRightButton onClick={addToCart}>+</StyledRightButton>

  </StyledFieldDiv>
}

function total(cart) {
  return Object.keys(cart).reduce((accumulator, current) => accumulator + PRODUCTS[current].price * cart[current], 0);
}

function CloseButton({ onClick, smaller }) {
  return <StyledCloseButton onClick={onClick} $smaller={smaller}>
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <StyledCloseIcon sx={{ fontSize: smaller ? '28px' : '40px' }} />
    </div>
  </StyledCloseButton>

}

function EmptyDiv({ setShowCart }) {
  return <StyledEmptyDiv>
    <StyledEmptyDivText>
      <PrimabullH5>
        Your cart is currently empty!
      </PrimabullH5>
      <br />
      <PrimabullH5>
        Visit the <Link href='/shop' onClick={() => setShowCart(false)}>Shop</Link> to browse our items
      </PrimabullH5>
    </StyledEmptyDivText>
  </StyledEmptyDiv>
}

function CartTable({ cart, removeFromCart }) {
  return <>
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align='center'>Quantity</TableCell>
            <TableCell align='right'>Total</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(cart).map(cartProduct => {
            const product = PRODUCTS[cartProduct]
            const quantity = cart[cartProduct]
            return quantity > 0 && <TableRow key={cartProduct}>
              <TableCell> <ProductName product={product} /></TableCell>
              <TableCell >
                <QuantityInput productKey={cartProduct} />
              </TableCell>
              <TableCell align='right'>
                <StyledPriceTotal>
                  ${quantity * product.price}
                </StyledPriceTotal>
              </TableCell>
              <TableCell align='right' colSpan={0.5}>
                <CloseButton smaller onClick={() => removeFromCart(cartProduct)} />
              </TableCell>
            </TableRow>
          })}
        </TableBody>
      </Table>
    </StyledTableContainer>
    <StyledMobileTable>
      {Object.keys(cart).map(cartProduct => {
        const product = PRODUCTS[cartProduct]
        const quantity = cart[cartProduct];
        return quantity > 0 && <StyledMobileProduct key={cartProduct}>
          <StyledRemoveButtonMobile>
            <CloseButton smaller onClick={() => removeFromCart(cartProduct)} />
          </StyledRemoveButtonMobile>
          <ProductName product={product} />
          <StyledMobileTotals>
            <QuantityInput productKey={cartProduct} />
            <StyledPriceTotal>
              Total: ${quantity * product.price}
            </StyledPriceTotal>
          </StyledMobileTotals>
          <StyledBorder />
        </StyledMobileProduct>
      })}

    </StyledMobileTable >
  </>
}