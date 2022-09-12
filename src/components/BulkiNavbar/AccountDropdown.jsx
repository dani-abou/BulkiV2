import { useState } from 'react'
import BulkiButton from "../BulkiButton"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link'
import { StyledButton, StyledDropdown } from './style';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

// const dropDownItems = {
// }

const AccountDropdown = () => {
  const [anchor, setAnchor] = useState()

  return <StyledDropdown>
    <StyledButton
      startIcon={<AccountBoxRoundedIcon />}
      onClick={e => setAnchor(e.currentTarget)}>
      Account
    </StyledButton>
    <Menu
      width={900}
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
    >
      <MenuItem onClick={() => setAnchor}>
        <Link href={'/catalog'}>profile</Link>
      </MenuItem>
      <MenuItem onClick={() => setAnchor}>dumt</MenuItem>
      <MenuItem onClick={() => setAnchor}>dfs</MenuItem>

    </Menu>
  </StyledDropdown>
}

export default AccountDropdown