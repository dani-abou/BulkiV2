import BulkiPage from "../src/common/BulkiPage"
import { useEffect } from "react"


const PAGE_META = {
  title: 'Account'
}


const Account = ({ headControls }) => {
  useEffect(() => headControls(PAGE_META), [headControls])

  return <>
    Account
  </>
}

export default Account