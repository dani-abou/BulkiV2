import { BulkiA, BulkiBody1 } from "../../common/tags"
import { useState } from "react"
import {
  StyledHeaderContainer, StyledBulkiLogoContainer, StyledRightDiv, StyledBulkiInput,
  StyledNavbarDiv, StyledLoginButton, StyledSearchButton, StyledNavbarButton
} from "./style"
import logo from '../../../public/BulkiLogo.png'
import Image from 'next/image'
import Link from "next/link"

const NAVBAR_ITEMS = {
  Home: '/',
  Listings: '/listings',
  Account: '/account',
  'Contact Us': '/contactUs'
}


const BulkiNavbar = () => {

  const [searchbarValue, setSearchbarValue] = useState('')

  const navbarSearch = () => {
    console.log('Searching for: ', searchbarValue)
  }

  return <>
    <StyledHeaderContainer>
      <StyledBulkiLogoContainer>
        <Image
          src={logo}
          alt='BulkiLogo'
          layout='fill'
        />
      </StyledBulkiLogoContainer>
      <StyledRightDiv>
        <StyledNavbarDiv>
          {Object.keys(NAVBAR_ITEMS).map(label => {
            return <Link key={label} href={NAVBAR_ITEMS[label]}>
              <StyledNavbarButton>
                <BulkiBody1>{label}</BulkiBody1>
              </StyledNavbarButton>
            </Link>
            // <BulkiA key={label} href={NAVBAR_ITEMS[label]}>{label}</BulkiA>
          })}
          <StyledLoginButton>Log In</StyledLoginButton>
        </StyledNavbarDiv>
        <StyledBulkiInput
          suffix={<StyledSearchButton noHover onClick={navbarSearch}>Search</StyledSearchButton>}
          placeholder='yesy'
          value={searchbarValue}
          onChange={e => setSearchbarValue(e.target.value)} />
      </StyledRightDiv>
    </StyledHeaderContainer>
  </>
}

export default BulkiNavbar