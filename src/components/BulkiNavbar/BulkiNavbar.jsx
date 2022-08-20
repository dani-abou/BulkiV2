import { BulkiBody1 } from "../../common/tags"

import { useState, useRef, useEffect, useMemo } from "react"
import {
  StyledHeaderContainer, StyledBulkiLogoContainer, StyledRightDiv, StyledBulkiInput,
  StyledNavbarDiv, StyledLoginButton, StyledSearchButton, StyledNavbarButton
} from "./style"
import logo from '../../../public/BulkiLogo.png'
import Image from 'next/image'
import Link from "next/link"
import { BulkiButton, BulkiButtonTypes } from "../BulkiButton"
import { AppBar, Toolbar, Grid } from "@mui/material";
import { Box } from "@mui/system"


const NAVBAR_ITEMS = {
  Home: '/',
  Listings: '/listings',
  Account: '/account',
  'Contact Us': '/contactUs'
}

const SearchButton = ({ searchbarValue, width }) => {
  return <Link href={searchbarValue == "" ?
    `${NAVBAR_ITEMS['Listings']}` :
    `${NAVBAR_ITEMS['Listings']}?search=${searchbarValue}`}>
    <StyledSearchButton width={width}>Search</StyledSearchButton>
  </Link>
}

const BulkiNavbar = () => {

  const [searchbarValue, setSearchbarValue] = useState('')
  const navbarRef = useRef(null)
  const loginRef = useRef(null)

  // return <StyledHeaderContainer>
  //   <StyledBulkiLogoContainer>
  //     <Image
  //       src={logo}
  //       alt='BulkiLogo'
  //       layout='fill'
  //     />
  //   </StyledBulkiLogoContainer>
  //   <StyledRightDiv>
  //     <StyledNavbarDiv ref={navbarRef}>
  //       {Object.keys(NAVBAR_ITEMS).map(label => {
  //         return <Link key={label} href={NAVBAR_ITEMS[label]}>
  //           <StyledNavbarButton type={BulkiButtonTypes['text']}> {label} </StyledNavbarButton>
  //         </Link>
  //       })}
  //       <StyledLoginButton ref={loginRef}>Log In</StyledLoginButton>
  //     </StyledNavbarDiv>
  //     <StyledBulkiInput
  //       color='primary'
  //       focused
  //       suffix={<SearchButton searchbarValue={searchbarValue} width={loginRef?.current?.offsetWidth ? ((loginRef.current.offsetWidth + 20) * 2) + 'px' : '30%'} />}
  //       width={navbarRef?.current?.offsetWidth ? navbarRef.current.offsetWidth + 'px' : '675px'}
  //       placeholder='yesy'
  //       value={searchbarValue}
  //       size='small'
  //       onChange={e => setSearchbarValue(e.target.value)} />
  //   </StyledRightDiv>
  // </StyledHeaderContainer>

  return <AppBar position='static' color='grey'>
    <Grid container sx={{
      height: '150px',
    }}>
      <Grid item md={5} lg={5}>
        <StyledBulkiLogoContainer>
          <Image
            src={logo}
            alt='BulkiLogo'
            layout='fill'
          />
        </StyledBulkiLogoContainer>
      </Grid>
      <Grid item md={5} lg={7}>
        <Toolbar ref={navbarRef}>
          {Object.keys(NAVBAR_ITEMS).map(label => <Link key={label} href={NAVBAR_ITEMS[label]}>
            <BulkiButton type={BulkiButtonTypes['text']} sx={{ width: '500px' }}>{label}</BulkiButton>
          </Link>
          )}
          <BulkiButton ref={loginRef} sx={{ width: '500px' }}>Log In</BulkiButton>
        </Toolbar>
        <StyledBulkiInput
          color='primary'
          focused
          suffix={<SearchButton searchbarValue={searchbarValue} width={loginRef?.current?.offsetWidth ? ((loginRef.current.offsetWidth + 20) * 2) + 'px' : '30%'} />}
          width={navbarRef?.current?.offsetWidth ? navbarRef.current.offsetWidth + 'px' : '700px'}
          style={{ marginRight: '20px' }}
          placeholder='Search for'
          value={searchbarValue}
          size='small'
          onChange={e => setSearchbarValue(e.target.value)} />

      </Grid>
    </Grid>
  </AppBar >

}

export default BulkiNavbar