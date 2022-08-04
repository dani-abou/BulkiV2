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

const SearchButton = ({ searchbarValue }) => {
  return <Link href={searchbarValue == "" ?
    `${NAVBAR_ITEMS['Listings']}` :
    `${NAVBAR_ITEMS['Listings']}?search=${searchbarValue}`}>
    <StyledSearchButton noHover>Search</StyledSearchButton>
  </Link>
}

const BulkiNavbar = () => {

  const [searchbarValue, setSearchbarValue] = useState('')

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
          })}
          <StyledLoginButton>Log In</StyledLoginButton>
        </StyledNavbarDiv>
        <StyledBulkiInput
          suffix={<SearchButton searchbarValue={searchbarValue} />}
          placeholder='yesy'
          value={searchbarValue}
          onChange={e => setSearchbarValue(e.target.value)} />
      </StyledRightDiv>
    </StyledHeaderContainer>
  </>
}

export default BulkiNavbar