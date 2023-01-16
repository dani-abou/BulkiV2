import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { urls } from "../../common";
import bulkiSignOut from '../../common/authentication/signOut';
import BulkiButton from "../BulkiButton";
import { StyledButton, StyledDropdown } from './style';

const dropDownItems = [
  {
    label: 'Profile',
    href: urls.account.fullUrl + urls.account.tabs.profile
  },
  {
    label: 'Orders',
    href: urls.account.fullUrl + urls.account.tabs.orders
  },
  {
    label: 'Listings',
    href: urls.account.fullUrl + urls.account.tabs.listings
  },
  {
    label: 'Payment Info',
    href: urls.account.fullUrl + urls.account.tabs.paymentInfo
  },

]

const AccountDropdown = () => {
  const [anchor, setAnchor] = useState()
  const router = useRouter()

  return <StyledDropdown>
    <StyledButton
      startIcon={<AccountBoxRoundedIcon />}
      onClick={e => setAnchor(e.currentTarget)}>
      Account
    </StyledButton>
    <Menu
      anchorEl={anchor}
      open={anchor}
      onClose={() => setAnchor()}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      PaperProps={{ elevation: 20, sx: { width: anchor?.offsetWidth || 143, marginTop: '5px' } }}
    >
      {
        dropDownItems.map(accountItem => {
          return <Link href={accountItem.href} key={accountItem.label} >
            <MenuItem onClick={() => setAnchor()} >
              {accountItem.label}
            </MenuItem>
          </Link>
        })
      }
      <MenuItem onClick={() => bulkiSignOut(router)}>
        Sign out
      </MenuItem>
    </Menu>
  </StyledDropdown>
}

export default AccountDropdown