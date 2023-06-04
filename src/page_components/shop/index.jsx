import { Alert, Snackbar } from "@mui/material";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
import { useCart } from "../../common/context";
import { PrimabullBody1, PrimabullH4, PrimabullH5 } from "../../common/styles";
import PrimabullButton from "../../components/PrimabullButton/PrimabullButton";
import PrimabullSurface from "../../components/PrimabullSurface";
import { PRODUCTS } from "../../data";
import {
  StyledAddToCart,
  StyledBackground, StyledBorder, StyledButtonChildDiv, StyledBuyButton, StyledContent, StyledDescLine, StyledGutterBorder, StyledPrice, StyledProduct, StyledProductImage
} from "./style";

const DEFAULT_HOVERS = Object.keys(PRODUCTS).reduce((accumulator, current) => ({ ...accumulator, [current]: false }), {})

export default function Shop() {

  const router = useRouter();
  const [hovered, setHovered] = useState();
  const [active, setActive] = useState();
  const { cart, increaseCart, decreaseCart, removeFromCart, setShowCart } = useCart();


  //If true, hover should be enabled
  const [triggerHover, setTriggerHover] = useState(false);

  const [buttonHovers, setButtonHovers] = useState({});

  const [snackbar, setSnackbar] = useState();

  const addToCart = useCallback((e, productKey, name) => {
    e.stopPropagation();
    increaseCart(productKey);
    setSnackbar(name)
  }, [increaseCart, setSnackbar])

  const hoverButton = key => {
    setButtonHovers(prev => ({ ...prev, [key]: true }))
  }

  const unHoverButton = key => {
    setButtonHovers(prev => ({ ...prev, [key]: false }))
  }

  const toggleHover = index => {
    if (triggerHover) {
      setHovered(index)
    }
  }

  const toggleHoverTrigger = () => {
    if (!triggerHover) {
      setTriggerHover(true);
    }
    setHovered()
  }

  const onProductClick = (e, productKey) => {
    // console.log(e)
    // console.log(e.target.className)
    // if (!e.target.className == `style__StyledAddToCart-sc-1dcdn7-9 ddcKAy`) {
    router.push(`/product/${productKey}`)
    // }
  }

  return <PrimabullSurface>
    <PrimabullH4 style={{ textAlign: 'center', marginTop: '10px' }}>
      Taste the Difference
    </PrimabullH4>
    <br />
    <StyledBackground>
      {Object.keys(PRODUCTS).map((productKey, index) => {
        const product = PRODUCTS[productKey]
        return <StyledProduct
          key={index}
          onMouseOver={() => toggleHover(index)}
          onMouseLeave={() => toggleHoverTrigger()}
          onTouchStart={() => setActive(index)}
          onTouchEnd={() => setActive()}
          onClick={e => onProductClick(e, productKey)}
          $hovered={index === hovered}
          $greyed={isMobile ? active !== undefined && index !== active : hovered !== undefined && index !== hovered}
        >
          <StyledBorder $index={index} $length={Object.keys(PRODUCTS).length} />
          <StyledGutterBorder $index={index} $length={Object.keys(PRODUCTS).length} />
          <StyledProductImage>
            <Image
              src={product.images[0]}
              alt={product.images[0]}
              layout='fill'
              objectFit="cover"
            />
          </StyledProductImage>
          <StyledContent>
            <br />
            <PrimabullH5>{product.name}</PrimabullH5>
            <br />
            {product.description.map((desc, i) => {
              return <div key={`${i}-${product.name}`}>
                <StyledDescLine $last={i === product.description.length - 1}>{desc}</StyledDescLine>
              </div>
            })}
            <br />
            <br />
            <br />


          </StyledContent>
          <StyledBuyButton
            size='large'
            onClick={e => addToCart(e, productKey, product.name)}
            onMouseOver={() => hoverButton(productKey)}
            onMouseOut={() => unHoverButton(productKey)}
          >
            <StyledButtonChildDiv>
              <StyledPrice $hovered={buttonHovers[productKey]}>
                ${product.price}
              </StyledPrice>
              <StyledAddToCart $hovered={buttonHovers[productKey]}>
                Add to Cart
              </StyledAddToCart>
            </StyledButtonChildDiv>
            {/* {buttonHovers[productKey] ? 'Add to Cart' : '$' + product.price} */}

          </StyledBuyButton>
        </StyledProduct>
      })}
    </StyledBackground>
    <Snackbar open={snackbar !== undefined} autoHideDuration={6000} onClose={() => setSnackbar()}>
      <Alert onClose={() => setSnackbar()} severity="success" sx={{ width: '100%', cursor: 'pointer' }} onClick={() => setShowCart(true)}>
        {snackbar} added to cart!
      </Alert>
    </Snackbar>

  </PrimabullSurface>
}

