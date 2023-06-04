import { CircularProgress } from "@mui/material";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { urls } from "../../common";
import { useCart } from "../../common/context";
import { PrimabullBody1, PrimabullCaption, PrimabullH5, PrimabullH6 } from "../../common/styles";
import { PrimabullButtonTypes } from "../../components/PrimabullButton";
import {
  QuantityDiv,
  StyledBackgroundPaper,
  StyledBottomDiv,
  StyledBuyButton, StyledCarousel, StyledCarouselDiv,
  StyledDescLine,
  StyledDescription,
  StyledFieldDiv,
  StyledInformationDiv,
  StyledLeftButton,
  StyledPrice, StyledPriceLabel, StyledPrices,
  StyledProductPage,
  StyledProductTitle,
  StyledQuantityInput,
  StyledRightButton,
  StyledUnitDef, StyledUnits
} from "./style";

export default function Product({ product, productId }) {
  const [quantity, setQuantity] = useState(1);

  const { cart, setCartValue, setShowCart } = useCart();
  const router = useRouter();

  const addToCart = useCallback(() => {
    setCartValue(productId, cart[productId] + parseInt(quantity));
  }, [setCartValue, quantity, productId, cart])

  const onAddClick = useCallback(() => {
    addToCart();
    router.push('/shop')
    setShowCart(true)
  }, [addToCart, router, setShowCart])

  const onBuyClick = useCallback(() => {
    addToCart();
    router.push('/checkout')
  }, [addToCart, router])

  return <StyledBackgroundPaper>
    {product &&
      <StyledProductPage>
        <StyledCarouselDiv>
          <StyledCarousel urls={product.images || []} showButtons showThumbnails />
        </StyledCarouselDiv>
        <StyledInformationDiv>
          <div>
            <StyledProductTitle>{product?.name}</StyledProductTitle>
            <StyledUnitDef>{product?.sellerName}</StyledUnitDef>
            <br />
            <br />
            {product.description.map((desc, i) => {
              return <div key={`${i}-${product.name}`}>
                <StyledDescLine $last={i === product.description.length - 1}>{desc}</StyledDescLine>
              </div>
            })}
            <br />
            <br />
          </div>
          <div>

          </div>
          <div>
            <PrimabullH6>Price: <b>${product?.price}</b></PrimabullH6>
            <StyledBottomDiv>

              <QuantityDiv >
                <PrimabullH6>Qty:</PrimabullH6>
                <QuantityInput value={quantity} setValue={setQuantity} />
              </QuantityDiv>

              <StyledBuyButton
                onClick={onAddClick}
                variant={PrimabullButtonTypes.outline}>
                Add to Cart</StyledBuyButton>
              <StyledBuyButton onClick={onBuyClick}>
                Buy now</StyledBuyButton>

            </StyledBottomDiv>
          </div>

        </StyledInformationDiv>
      </StyledProductPage>
    }
  </StyledBackgroundPaper>
}

export function QuantityInput({ value, setValue }) {
  return <StyledFieldDiv>
    <StyledLeftButton disabled={value < 2} onClick={() => setValue(value - 1)}>-</StyledLeftButton>
    <StyledQuantityInput
      borderless
      type='number'
      value={value}
      onChange={e => setValue(e.target.value)} />
    <StyledRightButton onClick={() => setValue(value + 1)}>+</StyledRightButton>

  </StyledFieldDiv>
}