import { useState, useRef, useEffect } from "react"
import {
  StyledBulkiLogoContainer, StyledBulkiInput,
  StyledSearchButton, StyledAppbar
} from "./style"
import logo from '../../../public/BulkiLogo.png'
import Image from 'next/image'
import Link from "next/link"
import BulkiButton, { BulkiButtonTypes } from "../BulkiButton"
import { Toolbar, Grid } from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded';
import { urls } from "../../assets"
import app from "../../../firebaseConfig"
import { useRouter } from 'next/router'
import AccountDropdown from "./AccountDropdown"

//All the buttons (other than the login button) that will show in the navbar
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

const search = (e, searchbarValue, router) => {
  e.preventDefault();
  router.push(searchbarValue == "" ?
    `${NAVBAR_ITEMS.listings.href}` :
    `${NAVBAR_ITEMS.listings.href}?search=${searchbarValue}`);
}

const SearchField = ({ loginRef }) => {
  const [searchbarValue, setSearchbarValue] = useState('')
  const router = useRouter()


  return <form onSubmit={e => search(e, searchbarValue, router)}>
    <StyledBulkiInput
      color='primary'
      focused
      suffix={
        <StyledSearchButton
          type="submit"
          width={loginRef?.current?.offsetWidth ? ((loginRef.current.offsetWidth) * 2) + 'px' : '20%'}>
          Search</StyledSearchButton>
      }
      style={{ marginRight: '20px' }}
      placeholder='Search for'
      value={searchbarValue}
      size='small'
      onChange={e => setSearchbarValue(e.target.value)} />
  </form>
}


const BulkiNavbar = ({ scrollTrigger }) => {


  const navbarRef = useRef(null)
  const loginRef = useRef(null)


  return <StyledAppbar position='static' color='grey'>

    <Grid container sx={{
      height: '100%',
    }}>

      <Grid item sm={3} xs={3} md={3} lg={5} >
        <StyledBulkiLogoContainer>
          <Link href={urls.primary}>
            <a href={urls.primary}>
              <Image
                src={logo}
                alt='BulkiLogo'
                layout='fill'
              />
            </a>
          </Link>
        </StyledBulkiLogoContainer>

      </Grid>

      <Grid item sm={9} xs={9} md={9} lg={7}>
        <Toolbar ref={navbarRef} sx={{ gap: '15px' }}>
          {Object.keys(NAVBAR_ITEMS).map(label => <Link key={label} href={NAVBAR_ITEMS[label].href}>
            <BulkiButton
              variant={BulkiButtonTypes['text']}
              sx={{ width: '500px' }}
              startIcon={NAVBAR_ITEMS[label].icon}
              onClick={() => setSearchbarValue('')}>
              {label}
            </BulkiButton>
          </Link>
          )}
          {
            app?.auth?.currentUser ? <AccountDropdown /> :
              <Link href={urls.signin}>
                <BulkiButton ref={loginRef} sx={{ width: '500px' }}>Log in</BulkiButton>
              </Link>
          }
        </Toolbar>
        <SearchField loginRef={loginRef} />
      </Grid>
    </Grid>
  </StyledAppbar >
}

export default BulkiNavbar