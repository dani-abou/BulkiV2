import { BulkiBody1 } from "../../assets/tags"
import { useState, useRef } from "react"
import {
  StyledBulkiLogoContainer, StyledBulkiInput,
  StyledSearchButton, StyledAppbar
} from "./style"
import logo from '../../../public/BulkiLogo.png'
import Image from 'next/image'
import Link from "next/link"
import BulkiButton, { BulkiButtonTypes } from "../BulkiButton"
import { AppBar, Toolbar, Grid } from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded';
import { urls } from "../../assets"
import app from "../../../firebaseConfig"

//ALl the buttons (other than the login button) that will show in the navbar
const NAVBAR_ITEMS = {
  home: {
    href: urls.home,
    icon: <HomeRoundedIcon />,
    translateKey: "home"
  },
  listings: {
    href: urls.catalog,
    icon: <LocalShippingRoundedIcon />,
    translateKey: 'listings'
  },
  account: {
    href: urls.account,
    icon: <AccountBoxRoundedIcon />,
    translateKey: 'account'
  },
  contactUs: {
    href: urls.contactUs,
    icon: <PermPhoneMsgRoundedIcon />,
    translateKey: 'contactUs'
  }
}

const SearchButton = ({ searchbarValue, width }) => {
  return <Link href={searchbarValue == "" ?
    `${NAVBAR_ITEMS.listings.href}` :
    `${NAVBAR_ITEMS.listings.href}?search=${searchbarValue}`}>
    <StyledSearchButton width={width}>Search</StyledSearchButton>
  </Link>
}

const BulkiNavbar = () => {

  const [searchbarValue, setSearchbarValue] = useState('')
  const navbarRef = useRef(null)
  const loginRef = useRef(null)

  return <StyledAppbar position='static' color='grey'>
    <Grid container sx={{
      height: '100%',
    }}>

      <Grid item sm={3} xs={3} md={3} lg={5}>

        <Link href={urls.primary}>
          <a>
            <StyledBulkiLogoContainer>
              <Image
                src={logo}
                alt='BulkiLogo'
                layout='fill'
              />
            </StyledBulkiLogoContainer>
          </a>
        </Link>
      </Grid>

      <Grid item sm={9} xs={9} md={9} lg={7}>
        <Toolbar ref={navbarRef} sx={{ gap: '15px' }}>
          {Object.keys(NAVBAR_ITEMS).map(label => <Link key={label} href={NAVBAR_ITEMS[label].href}>
            <BulkiButton
              type={BulkiButtonTypes['text']}
              sx={{ width: '500px' }}
              startIcon={NAVBAR_ITEMS[label].icon}
              onClick={() => setSearchbarValue('')}>
              {label}
            </BulkiButton>
          </Link>
          )}
          <Link href={urls.signin}>
            <BulkiButton ref={loginRef} sx={{ width: '500px' }}>{app?.auth?.currentUser ? 'Log out' : 'Log in'}</BulkiButton>
          </Link>
        </Toolbar>
        <StyledBulkiInput
          color='primary'
          focused
          suffix={
            <SearchButton
              searchbarValue={searchbarValue}
              width={loginRef?.current?.offsetWidth ? ((loginRef.current.offsetWidth + 20) * 2) + 'px' : '30%'} />}
          style={{ marginRight: '20px' }}
          placeholder='Search for'
          value={searchbarValue}
          size='small'
          onChange={e => setSearchbarValue(e.target.value)} />

      </Grid>
    </Grid>
  </StyledAppbar >
}

export default BulkiNavbar