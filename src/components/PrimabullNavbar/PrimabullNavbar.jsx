
import dynamic from 'next/dynamic'
import Image from "next/legacy/image"
import Link from "next/link"
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from "react"
import { isMobile } from 'react-device-detect'
import sendMail from '../../api/mailer'
import newsletterSignup from '../../api/newsletter/signup'
import { Mobile, urls } from "../../common"
import { PrimabullContextConsumer, useCart } from "../../common/context"
import Cart from '../../page_components/cart'
import { PrimabullButtonTypes } from "../PrimabullButton"
import {
  StyledAppbar,
  StyledButton,
  StyledCartButton,
  StyledCartNumber,
  StyledCartNumberBox,
  StyledLinks,
  StyledLogoBox,
  StyledMobileLinks,
  StyledPrimabullInput, StyledPrimabullLogoContainer,
  StyledSearchButton
} from "./style"

const CartButton = dynamic(
  () => import('./CartButton'),
  { ssr: false }
)


//All the buttons (other than the login button) that will show in the navbar
export const NAVBAR_ITEMS = [
  {
    href: "/shop",
    // icon: <LocalShippingRoundedIcon />,
    translateKey: 'listings',
    label: 'Shop'
  },
  {
    href: "/aboutUs",
    // icon: <LocalShippingRoundedIcon />,
    translateKey: 'listings',
    label: 'About Us'
  }
]

const PrimabullNavbar = ({ skinny, PrimabullContext }) => {

  return <StyledAppbar >

    <StyledPrimabullLogoContainer $skinny={skinny}>
      <Link href={urls.primary}>
        <StyledLogoBox href='/'>
          <Image
            src='logos/MainPrimary.png'
            alt='PrimabullLogo'
            layout='fill'
          />
        </StyledLogoBox>
        <Mobile style={{ width: '100%', height: '100%' }} href='/'>
          <Image
            src='logos/MainSecondary.png'
            alt='PrimabullLogo'
            layout='fill'
          />
        </Mobile>
      </Link>
    </StyledPrimabullLogoContainer>
    <MobileLinks />

    <StyledLinks>
      {NAVBAR_ITEMS.map(button => <Link key={button.label} href={button.href}>
        <StyledButton
          variant={PrimabullButtonTypes.text}
          size='large'
          color='onSurface'
          {...button.props}
        >
          {button.label}
        </StyledButton>
      </Link>
      )}
      <CartButton />
    </StyledLinks>
    <Cart />
  </StyledAppbar >
}

export default function PrimabullNavbarWithContext(props) {
  return <PrimabullContextConsumer>
    {context => <PrimabullNavbar {...props} PrimabullContext={context} />}
  </PrimabullContextConsumer>
}

function MobileLinks() {
  return <Mobile style={{ width: "100%", height: '100%' }}>
    <StyledMobileLinks>
      {NAVBAR_ITEMS.map(button => <Link key={button.label} href={button.href}>
        <StyledButton
          variant={PrimabullButtonTypes.primary}
          size='large'
          // $mobile={true}
          {...button.props}
        >
          {button.label}
        </StyledButton>
      </Link>)}
    </StyledMobileLinks>
    <CartButton />
  </Mobile>
}