
import dynamic from 'next/dynamic'
import Image from "next/legacy/image"
import Link from "next/link"
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from "react"
import { isMobile } from 'react-device-detect'
import sendMail from '../../api/mailer'
import newsletterSignup from '../../api/newsletter/signup'
import { urls } from "../../common"
import { BulkiContextConsumer, useCart } from "../../common/context"
import Cart from '../../page_components/cart'
import { BulkiButtonTypes } from "../BulkiButton"
import {
  StyledAppbar, StyledBulkiInput, StyledBulkiLogoContainer, StyledButton,
  StyledCartButton,
  StyledCartNumber,
  StyledCartNumberBox,
  StyledLinks,
  StyledSearchButton,
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
    href: "/whyBulki",
    // icon: <LocalShippingRoundedIcon />,
    translateKey: 'listings',
    label: 'Why Bulki?'
  }
]

const BulkiNavbar = ({ skinny, bulkiContext }) => {

  return <StyledAppbar >

    <StyledBulkiLogoContainer $skinny={skinny}>
      <Link href={urls.primary}>
        <div style={{ width: '100%', height: '100%' }} href='/'>
          <Image
            src='/logos/MainPrimary.png'
            alt='BulkiLogo'
            layout='fill'
          />
        </div>
      </Link>
    </StyledBulkiLogoContainer>
    <StyledLinks>
      {NAVBAR_ITEMS.map(button => <Link key={button.label} href={button.href}>
        <StyledButton
          variant={BulkiButtonTypes.text}
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
    <button onClick={() => newsletterSignup("dabouhamad@gmail.com", "Dan", "Jackson")}>Test</button>
    <Cart />
  </StyledAppbar >
}

export default function BulkiNavbarWithContext(props) {
  return <BulkiContextConsumer>
    {context => <BulkiNavbar {...props} bulkiContext={context} />}
  </BulkiContextConsumer>
}


