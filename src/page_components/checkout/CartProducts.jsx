import Image from "next/legacy/image";
import { useMemo } from 'react';
import { useCart } from "../../common/context";
import { BulkiBody1, BulkiBody2 } from "../../common/styles";
import {
  StyledCartProduct,
  StyledImageContainer,
  StyledMobileTotals,
  StyledProductImage,
  StyledProductName, StyledProductTotal,
  StyledQuantityContainer, StyledQuantityNumber,
  StyledTotalDiv
} from "./style";


export default function CartProducts({ tax }) {
  const { extendedCart, totals } = useCart();
  const cart = useMemo(() => extendedCart(), [extendedCart])
  // const [taxedAmount, totalAfterTax] = useMemo(() => {
  //   const thisTax = Math.round((tax / 100 * totals.subtotal) * 100) / 100;
  //   const thisTotal = totals.total + thisTax;
  //   return [thisTax, thisTotal]
  // }, [tax, totals])

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
              src={product.image}
              alt={'cart' + product.name}
              layout='fill'
              objectFit="cover"
            />
          </StyledImageContainer>
        </StyledProductImage>
        <StyledProductName>
          <BulkiBody2>
            {product.name}
          </BulkiBody2>
        </StyledProductName>
        <StyledProductTotal>
          <BulkiBody2>
            ${product.quantity * product.price}
          </BulkiBody2>
        </StyledProductTotal>

      </StyledCartProduct>
    })
  }
    <br />
    <br />

    <StyledTotalDiv style={{ marginBottom: '6px' }}>
      <BulkiBody1>Subtotal</BulkiBody1>
      <BulkiBody1>${totals.subtotal}</BulkiBody1>
    </StyledTotalDiv>
    <StyledTotalDiv style={{ marginBottom: '6px' }}>
      <BulkiBody1>Shipping</BulkiBody1>
      <BulkiBody1>${totals.shippingTotal}</BulkiBody1>
    </StyledTotalDiv>
    {tax > 0 && <StyledTotalDiv style={{ marginBottom: '15px' }}>
      <BulkiBody1>Tax</BulkiBody1>
      <BulkiBody1>${totals.taxTotal}</BulkiBody1>
    </StyledTotalDiv>}
    <StyledTotalDiv >
      <BulkiBody1 style={{ fontWeight: 600, fontSize: '20px' }}>Total</BulkiBody1>
      <BulkiBody1 style={{ fontWeight: 500, fontSize: '20px' }}>${totals.total}</BulkiBody1>
    </StyledTotalDiv>
  </>
}
