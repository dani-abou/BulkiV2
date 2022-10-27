import { useRouter } from "next/router"
import { useEffect } from "react"
import { urls } from "../src/common"
import { Account } from "../src/page_components"

const PAGE_META = {
  title: 'My Account'
}

const AccountPage = ({ headControls }) => {
  useEffect(() => headControls(PAGE_META), [headControls])

  const router = useRouter()
  const switchTab = (newUrl) => router.push(urls.account.fullUrl + newUrl, undefined, { shallow: true })

  return <Account currentTab={router.query.tab} setSelectedTab={switchTab} />
}

export default AccountPage