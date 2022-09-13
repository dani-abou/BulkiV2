import { useState, useRef, useEffect } from "react"
import {
  StyledBulkiLogoContainer, StyledBulkiInput, StyledButton,
  StyledSearchButton, StyledAppbar, StyledToolbar
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
import { useRouter } from 'next/router'
import AccountDropdown from "./AccountDropdown"
import { BulkiContextConsumer } from "../../assets/context"


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

export const SearchField = ({ loginRef, searchbarValue, setSearchbarValue }) => {
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


const BulkiNavbar = ({ skinny, bulkiContext }) => {

  const [searchbarValue, setSearchbarValue] = useState('')

  const navbarRef = useRef(null)
  const loginRef = useRef(null)


  // return <CompressedNavbar />
  return <StyledAppbar position='static' >

    <Grid container sx={{
      height: '100%',
    }}>
      <Grid item sm={3} xs={3} md={3} lg={5} >
        <StyledBulkiLogoContainer $skinny={true}>
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
        {
          !skinny && <StyledToolbar ref={navbarRef} $skinny={skinny}>
            {Object.keys(NAVBAR_ITEMS).map(label => <Link key={label} href={NAVBAR_ITEMS[label].href}>
              <StyledButton
                variant={BulkiButtonTypes['text']}
                startIcon={NAVBAR_ITEMS[label].icon}
                onClick={() => setSearchbarValue('')}
              >
                {label}
              </StyledButton>
            </Link>
            )}
            {
              bulkiContext?.userData ? <AccountDropdown /> :
                <Link href={urls.signin}>
                  <StyledButton
                    startIcon={<AccountBoxRoundedIcon />}
                    ref={loginRef}
                  >Log in</StyledButton>
                </Link>
            }
          </StyledToolbar>
        }



        <SearchField loginRef={loginRef}
          searchbarValue={searchbarValue}
          setSearchbarValue={setSearchbarValue} />
      </Grid>
    </Grid>
  </StyledAppbar >
}

export default function BulkiNavbarWithContext(props) {
  return <BulkiContextConsumer>
    {context => <BulkiNavbar {...props} bulkiContext={context} />}
  </BulkiContextConsumer>
}