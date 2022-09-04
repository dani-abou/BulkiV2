import { useState } from 'react'
import BulkiButton from "../BulkiButton"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link'

const AccountDropdown = () => {
  const [anchor, setAnchor] = useState()

  return <div>
    <BulkiButton onClick={e => setAnchor(e.currentTarget)} sx={{ width: '100%' }}>
      Account
    </BulkiButton>
    <Menu
      anchorEl={anchor}
      open={anchor}
      onClose={() => setAnchor()}
    >
      <MenuItem onClick={() => setAnchor}><Link href={'/catalog'}>profile</Link></MenuItem>
      <MenuItem onClick={() => setAnchor}>dumt</MenuItem>
      <MenuItem onClick={() => setAnchor}>dfs</MenuItem>

    </Menu>
  </div>
}

export default AccountDropdown