import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded'
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded'
import { Grid } from "@mui/material"
import Image from "next/legacy/image"
import Link from "next/link"
import { useRouter } from 'next/router'
import { useRef, useState } from "react"
import { urls } from "../../common"
import { BulkiContextConsumer } from "../../common/context"
import { BulkiButtonTypes } from "../BulkiButton"
// import AccountDropdown from "./AccountDropdown"
import Search from "./Search"
import {
  StyledAppbar, StyledBulkiInput, StyledBulkiLogoContainer, StyledButton, StyledCollapsible,
  StyledLinks,
  StyledSearchButton, StyledToolbar
} from "./style"


//All the buttons (other than the login button) that will show in the navbar
export const NAVBAR_ITEMS = [
  {
    href: "/",
    // icon: <LocalShippingRoundedIcon />,
    translateKey: 'listings',
    label: 'Shop'
  },
  {
    href: "/",
    // icon: <LocalShippingRoundedIcon />,
    translateKey: 'listings',
    label: 'Why Bulki?'
  },
  {
    href: "/",
    // icon: <LocalShippingRoundedIcon />,
    translateKey: 'listings',
    label: 'Sign Up',
    props: {
      variant: BulkiButtonTypes.primary
    }
  },
]

const search = (e, searchbarValue, router) => {
  e.preventDefault();
  router.push(searchbarValue == "" ?
    `${urls.catalog}` :
    `${urls.catalog}?search=${searchbarValue}`);
}

export const SearchField = ({ loginRef, searchbarValue, setSearchbarValue }) => {
  const router = useRouter()

  return <form onSubmit={e => search(e, searchbarValue, router)}>
    {connectSearchBox(
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
    )}
  </form>
}


const BulkiNavbar = ({ skinny, bulkiContext }) => {

  const [searchbarValue, setSearchbarValue] = useState('')

  const navbarRef = useRef(null)
  const loginRef = useRef(null)


  return <StyledAppbar >
    <StyledBulkiLogoContainer $skinny={skinny}>
      <Link href={urls.primary}>
        <div style={{ width: '100%', height: '100%' }} href={urls.primary}>
          <Image
            src='BulkiLogo.png'
            alt='BulkiLogo'
            layout='fill'
          />
        </div>
      </Link>
    </StyledBulkiLogoContainer>
    <StyledLinks>
      {/* <StyledCollapsible $skinny={skinny}> */}

      {/* <StyledToolbar ref={navbarRef} $skinny={skinny}> */}
      {NAVBAR_ITEMS.map(button => <Link key={button.label} href={button.href}>
        <StyledButton
          variant={BulkiButtonTypes['text']}
          startIcon={button.icon}
          onClick={() => setSearchbarValue('')}
          size='large'
          {...button.props}
        >
          {button.label}
        </StyledButton>
      </Link>
      )}
      {/* {
              bulkiContext?.userData ? <AccountDropdown /> :
                <Link href={urls.signin}>
                  <StyledButton
                    startIcon={<AccountBoxRoundedIcon />}
                    ref={loginRef}
                  >Log in</StyledButton>
                </Link>
            } */}
      {/* </StyledToolbar> */}
      {/* </StyledCollapsible> */}
      {/* <Search loginRef={loginRef}
          searchbarValue={searchbarValue}
          setSearchbarValue={setSearchbarValue} /> */}
    </StyledLinks>
  </StyledAppbar >
}

export default function BulkiNavbarWithContext(props) {
  return <BulkiContextConsumer>
    {context => <BulkiNavbar {...props} bulkiContext={context} />}
  </BulkiContextConsumer>
}