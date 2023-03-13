import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded'
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded'
import { Grid } from "@mui/material"
import Image from 'next/image'
import Link from "next/link"
import { useRouter } from 'next/router'
import { useRef, useState } from "react"
import { urls } from "../../common"
import { BulkiContextConsumer } from "../../common/context"
import { BulkiButtonTypes } from "../BulkiButton"
import AccountDropdown from "./AccountDropdown"
import Search from "./Search"
import {
  StyledAppbar, StyledBulkiInput, StyledBulkiLogoContainer, StyledButton, StyledCollapsible, StyledSearchButton, StyledToolbar
} from "./style"


//All the buttons (other than the login button) that will show in the navbar
export const NAVBAR_ITEMS = [
  // home: {
  //   href: urls.home,
  //   icon: <HomeRoundedIcon />,
  //   translateKey: "home"
  // },
  {
    href: urls.catalog,
    icon: <LocalShippingRoundedIcon />,
    translateKey: 'listings',
    label: 'Listings'
  },

  // {
  //   href: '/',
  //   icon: <InfoRoundedIcon />,
  //   // translateKey: 'About Us'
  //   label: 'About Us'
  // },
  {
    href: urls.contactUs,
    icon: <PermPhoneMsgRoundedIcon />,
    translateKey: 'Contact Us',
    label: 'Who we are'
  },
  {
    href: urls.newListing,
    icon: <AddRoundedIcon />,
    label: 'Post Listing',
    props: {
      variant: BulkiButtonTypes.outline,
    }
  },
]

const search = (e, searchbarValue, router) => {
  e.preventDefault();
  router.push(searchbarValue == "" ?
    `${urls.catalog}` :
    `${urls.catalog}?search=${searchbarValue}`);
}

// export const SearchField = ({ loginRef, searchbarValue, setSearchbarValue }) => {
//   const router = useRouter()

//   return <form onSubmit={e => search(e, searchbarValue, router)}>
//     {connectSearchBox(
//       <StyledBulkiInput
//         color='primary'
//         focused
//         suffix={
//           <StyledSearchButton
//             type="submit"
//             width={loginRef?.current?.offsetWidth ? ((loginRef.current.offsetWidth) * 2) + 'px' : '20%'}>
//             Search</StyledSearchButton>
//         }
//         style={{ marginRight: '20px' }}
//         placeholder='Search for'
//         value={searchbarValue}
//         size='small'
//         onChange={e => setSearchbarValue(e.target.value)} />
//     )}
//   </form>
// }


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
        <StyledBulkiLogoContainer $skinny={skinny}>
          <Link href={urls.primary}>
            <a style={{ width: '100%', height: '100%' }} href={urls.primary}>
              <Image
                src='BulkiLogo.png'
                alt='BulkiLogo'
                layout='fill'
              />
            </a>
          </Link>
        </StyledBulkiLogoContainer>
      </Grid>
      <Grid item sm={9} xs={9} md={9} lg={7}>
        <StyledCollapsible $skinny={skinny}>

          <StyledToolbar ref={navbarRef} $skinny={skinny}>
            {NAVBAR_ITEMS.map(button => <Link key={button.label} href={button.href}>
              <StyledButton
                variant={BulkiButtonTypes['text']}
                startIcon={button.icon}
                onClick={() => setSearchbarValue('')}
                {...button.props}
              >
                {button.label}
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
        </StyledCollapsible>
        <Search loginRef={loginRef}
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