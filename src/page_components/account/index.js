import { AccountProfile, AccountOrders, AccountListings, AccountPaymentInfo } from "./accountPages"
import { urls } from "../../common"
import {
  StyledSurface, StyledFlex, StyledTabs, StyledTab, StyledLeft,
  StyledTitleBox, StyledTitle, StyledRight
} from "./style"
import { BulkiH4 } from "../../common/styles"

const TABS = {
  [urls.account.tabs.profile]: {
    tabLabel: 'Profile',
    page: <AccountProfile />
  },
  [urls.account.tabs.orders]: {
    tabLabel: 'Orders',
    page: <AccountOrders />
  },
  [urls.account.tabs.paymentInfo]: {
    tabLabel: 'Payment Info',
    page: <AccountPaymentInfo />
  },
  [urls.account.tabs.listings]: {
    tabLabel: 'Listings',
    page: <AccountListings />
  }
}



const Account = ({ currentTab, setSelectedTab }) => {

  const test = (e, newValue) => {
    setSelectedTab(newValue)
  }

  return <StyledSurface>
    <StyledFlex>
      <StyledLeft>
        <StyledTitleBox>
          <StyledTitle>
            <BulkiH4>
              Account
            </BulkiH4>
          </StyledTitle>
        </StyledTitleBox>
        <StyledTabs value={currentTab} onChange={test} orientation="vertical">
          {Object.keys(TABS).map(tabKey => {
            const tab = TABS[tabKey]
            return <StyledTab key={tabKey} label={tab.tabLabel} value={tabKey} />
          })}
        </StyledTabs>
      </StyledLeft>
      <StyledRight>{TABS[currentTab]?.page}</StyledRight>
    </StyledFlex>
  </StyledSurface>
}

export default Account