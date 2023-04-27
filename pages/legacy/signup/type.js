import { AccountType } from "../../src/page_components"
import { useEffect } from "react"

const PAGE_META = {
  title: "Sign Up - Bulki"
}

const AccountTypePage = ({ headControls }) => {
  useEffect(() => headControls(PAGE_META), [headControls]);
  return <AccountType />
}

export default AccountTypePage