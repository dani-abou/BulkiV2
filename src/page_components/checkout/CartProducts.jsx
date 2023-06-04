import Image from "next/legacy/image";
import { useMemo } from 'react';
import { useCart } from "../../common/context";
import { PrimabullBody1, PrimabullBody2 } from "../../common/styles";
import {
  StyledCartProduct,
  StyledImageContainer,
  StyledMobileTotals,
  StyledProductImage,
  StyledProductName, StyledProductTotal,
  StyledQuantityContainer, StyledQuantityNumber,
  StyledTotalDiv
} from "./style";


export default function CartProducts() {
  const { extendedCart, totals } = useCart();
  const cart = useMemo(() => extendedCart(), [extendedCart])

  return <>{
    Object.keys(cart).map(cartKey => {
      const product = cart[cartKey]
      return <StyledCartProduct key={cartKey}>
        <StyledProductImage>
          <StyledQuantityContainer>
            <StyledQuantityNumber>
              {product.quantity}
            </StyledQuantityNumber>
          </StyledQuantityContainer>
          <StyledImageContainer>
            <Image
              src={product.images[0]}
              alt={'cart' + product.name}
              layout='fill'
              objectFit="cover"
            />
          </StyledImageContainer>
        </StyledProductImage>
        <StyledProductName>
          <PrimabullBody2>
            {product.name}
          </PrimabullBody2>
        </StyledProductName>
        <StyledProductTotal>
          <PrimabullBody2>
            ${product.quantity * product.price}
          </PrimabullBody2>
        </StyledProductTotal>

      </StyledCartProduct>
    })
  }
    <br />
    <br />

    <StyledTotalDiv style={{ marginBottom: '6px' }}>
      <PrimabullBody1>Subtotal</PrimabullBody1>
      <PrimabullBody1>${totals.subtotal}</PrimabullBody1>
    </StyledTotalDiv>
    <StyledTotalDiv style={{ marginBottom: '6px' }}>
      <PrimabullBody1>Shipping</PrimabullBody1>
      <PrimabullBody1>${totals.shippingTotal}</PrimabullBody1>
    </StyledTotalDiv>
    {totals.taxTotal > 0 && <StyledTotalDiv style={{ marginBottom: '15px' }}>
      <PrimabullBody1>Tax</PrimabullBody1>
      <PrimabullBody1>${totals.taxTotal}</PrimabullBody1>
    </StyledTotalDiv>}
    <StyledTotalDiv >
      <PrimabullBody1 style={{ fontWeight: 600, fontSize: '20px' }}>Total</PrimabullBody1>
      <PrimabullBody1 style={{ fontWeight: 500, fontSize: '20px' }}>${totals.total}</PrimabullBody1>
    </StyledTotalDiv>
  </>
}
